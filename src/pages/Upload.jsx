import React, { useEffect, useState } from "react";
import { Container } from "../index";
import toast from "react-hot-toast";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [allPdfs, setAllPdfs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPdfs, setFilteredPdfs] = useState([]);
  const [result, setResult] = useState("");
  const [validity, setValidity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getAllPdfs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/get-uploads`
        );
        setAllPdfs(response.data.data);
        setFilteredPdfs(response.data.data);
      } catch (error) {
        console.error("Error fetching PDFs:", error);
        toast.error("Failed to fetch documents.");
      }
    };
    getAllPdfs();
  }, [allPdfs, title, file]);

  useEffect(() => {
    const filtered = allPdfs.filter((pdf) =>
      pdf.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPdfs(filtered);
  }, [searchTerm, allPdfs]);

  const showPdf = (pdf) => {
    window.open(
      `${import.meta.env.VITE_BASE_URL}/uploads/${pdf}`,
      "_blank",
      "noreferrer"
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      toast.error("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    const loading = toast.loading("Uploading...");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.dismiss(loading);
      toast.success("File uploaded successfully.");
      setFile(null);
      setTitle("");
    } catch (error) {
      toast.dismiss(loading);
      toast.error("Error uploading file.");
    }
  };

  const handleDelete = async (pdf) => {
    const loading = toast.loading("Deleting Document...");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/delete-upload`,
        { pdf }
      );
      toast.dismiss(loading);
      toast.success("Document deleted successfully");
    } catch (e) {
      toast.dismiss(loading);
      toast.error("Failed to Delete Document");
    }
  };

  const handleValidity = async (id) => {
    const loading = toast.loading("Checking validity...");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/get-single-upload`,
        { id }
      );
      setResult(response.data.data.result);

      const aiResponse = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: `Tell me whether if the invoice is valid or not according to the invoice data i am providing you and why, INVOICE DATA :  ${response.data.data.result}`,
                },
              ],
            },
          ],
        },
      });

      setValidity(aiResponse.data.candidates[0].content.parts[0].text);
      toast.dismiss(loading);
      toast.success("Validity Check Done");

      navigate("/report", {
        state: { result: aiResponse.data.candidates[0].content.parts[0].text },
      });
    } catch (e) {
      toast.dismiss(loading);
    }
  };

  return (
    <Container>
      {/* Header */}
      <header className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#2C3E50]">Manage Your Documents</h1>
        <p className="text-lg text-[#7F8C8D] mt-2">Upload, view, and manage your documents in one place</p>
      </header>

      {/* Upload Section */}
      <section className="bg-[#ECF0F1] p-6 sm:p-8 rounded-lg shadow-xl mb-12">
        <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">Upload a New Document</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6 max-w-lg sm:max-w-3xl mx-auto"
        >
          <div className="mb-6">
            <label className="block text-[#2C3E50] text-lg font-medium mb-2">Document Title</label>
            <input
              type="text"
              placeholder="Enter document title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#2C3E50] text-lg font-medium mb-2">Select Document File</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full text-[#2C3E50] border-2 border-[#BDC3C7] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3498DB] text-white text-lg py-3 rounded-lg hover:bg-[#2980B9] transition duration-300"
          >
            Upload Document
          </button>
        </form>
      </section>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
        <input
          type="text"
          placeholder="Search for documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-2/3 px-6 py-3 border-2 border-[#BDC3C7] rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
        />
      </div>

      {/* Documents List */}
	  <section>
  <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">Your Uploaded Documents</h2>
  <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
    {/* For large screens, keep the table structure */}
    <div className="hidden sm:block">
      <table className="min-w-full text-left text-[#2C3E50]">
        <thead className="border-b bg-[#F4F6F7]">
          <tr>
            <th className="py-4 px-6 text-sm sm:text-lg font-medium">Document Name</th>
            <th className="py-4 px-6 text-sm sm:text-lg font-medium">Type</th>
            <th className="py-4 px-6 text-sm sm:text-lg font-medium">Uploaded On</th>
            <th className="py-4 px-6 text-sm sm:text-lg font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPdfs.length > 0 ? (
            filteredPdfs.map((e) => (
              <tr key={e._id} className="hover:bg-[#ECF0F1] border-b">
                <td className="py-4 px-6">{e.title}</td>
                <td className="py-4 px-6">{e.type}</td>
                <td className="py-4 px-6">{e.dateUploaded}</td>
                <td className="py-4 px-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      className="px-4 py-2 text-sm font-medium text-[#3498DB] bg-transparent border border-[#3498DB] rounded-md hover:bg-[#3498DB] hover:text-white"
                      onClick={() => showPdf(e.pdf)}
                    >
                      View
                    </button>
                    <MdDeleteForever
                      onClick={() => handleDelete(e._id)}
                      className="w-6 h-6 text-red-600 cursor-pointer hover:text-red-700"
                    />
                    <button
                      className="px-4 py-2 text-sm font-medium text-[#2ECC71] bg-transparent border border-[#2ECC71] rounded-md hover:bg-[#2ECC71] hover:text-white"
                      onClick={() => handleValidity(e._id)}
                    >
                      Check Validity
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-6 text-[#BDC3C7]">
                No documents found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    {/* For smaller screens, switch to a stacked layout */}
    <div className="sm:hidden">
      {filteredPdfs.length > 0 ? (
        filteredPdfs.map((e) => (
          <div key={e._id} className="border-b p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-[#2C3E50]">{e.title}</span>
              <span className="text-sm text-[#BDC3C7]">{e.type}</span>
            </div>
            <div className="text-sm text-[#BDC3C7]">Uploaded on: {e.dateUploaded}</div>
            <div className="flex gap-4">
              <button
                className="px-4 py-2 text-sm font-medium text-[#3498DB] bg-transparent border border-[#3498DB] rounded-md hover:bg-[#3498DB] hover:text-white"
                onClick={() => showPdf(e.pdf)}
              >
                View
              </button>
              <MdDeleteForever
                onClick={() => handleDelete(e._id)}
                className="w-6 h-6 text-red-600 cursor-pointer hover:text-red-700"
              />
              <button
                className="px-4 py-2 text-sm font-medium text-[#2ECC71] bg-transparent border border-[#2ECC71] rounded-md hover:bg-[#2ECC71] hover:text-white"
                onClick={() => handleValidity(e._id)}
              >
                Check Validity
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-6 text-[#BDC3C7]">No documents found.</div>
      )}
    </div>
  </div>
</section>

    </Container>
  );
}
