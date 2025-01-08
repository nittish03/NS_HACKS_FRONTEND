import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null); //main
  const [title, setTitle] = useState("");
  const [allPdfs, setAllPdfs] = useState([]);

 


  useEffect(() => {
    const getAllPdfs = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/get-uploads`);
      setAllPdfs(response.data.data);
    };
    getAllPdfs();
  }, [file,title,allPdfs]);

  const showPdf = (pdf) =>{
    window.open(`${import.meta.env.VITE_BASE_URL}/uploads/${pdf}`,"_blank","noreferrer")
  }


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

      console.log(response.data);
      toast.dismiss(loading);
      toast.success("File uploaded successfully.");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.dismiss(loading);
      toast.error("Error uploading file.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <header className="mb-6 text-center sm:text-left">
        <h1 className="text-3xl font-bold text-gray-800">Manage Documents</h1>
        <p className="text-gray-600">
          Upload, view, and manage your documents in one place...
        </p>
      </header>

      {/* Upload Section */}
      <section className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Upload a New Document
        </h2>
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto"
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="enter title"
              className="border-2 w-full p-1 mb-2"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label
              htmlFor="file"
              className="block text-gray-700 font-medium mb-2"
            >
              Select a file:
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              accept=".pdf,.jpg,.jpeg,.png"
              className="block w-full text-gray-700 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Upload
          </button>
        </form>
      </section>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
        <input
          type="text"
          id="search-bar"
          placeholder="Search documents..."
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Documents List */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Documents
        </h2>
        <div
          id="documents-list"
          className="bg-white rounded-lg shadow p-6 overflow-x-auto"
        >
          <table className="min-w-full text-left text-gray-800">
            <thead className="border-b">
              <tr>
                <th className="py-2 px-4 text-sm font-medium">Name</th>
                <th className="py-2 px-4 text-sm font-medium">Type</th>
                <th className="py-2 px-4 text-sm font-medium">Date Uploaded</th>
                <th className="py-2 px-4 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody id="document-rows">
              {/* Example row */}
              {
                allPdfs.map((e) => (
                  <tr key={e._id}>
                    <td className="py-2 px-4 text-sm">{e.title}</td>
                    <td className="py-2 px-4 text-sm">{e.type}</td>
                    <td className="py-2 px-4 text-sm">{e.dateUploaded}</td>
                    <td className="py-2 px-4 text-sm">
                      <button
                        className="px-2 py-1 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-800"
                        onClick={() => {
                          showPdf(e.pdf)
                        }}
                      >
                        Show Pdf
                      </button>
                    </td>
                  </tr>
                ))
              }

              {/* Add more rows dynamically */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
