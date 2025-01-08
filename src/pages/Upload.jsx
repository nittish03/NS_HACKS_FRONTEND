import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null); // Main
  const [title, setTitle] = useState("");
  const [allPdfs, setAllPdfs] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // For search functionality
  const [filteredPdfs, setFilteredPdfs] = useState([]);

<<<<<<< HEAD
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
  }, [allPdfs,title,file]);
=======
	// document.getElementById("upload-form").addEventListener("submit", (e) => {
	// 	e.preventDefault();

	// 	const fileInput = document.getElementById("file-input");
	// 	const file = fileInput.files[0];

	// 	if (!file) {
	// 		alert("Please select a file to upload.");
	// 		return;
	// 	}

	// 	// Simulate an API call to upload the file
	// 	const newDocument = {
	// 		name: file.name,
	// 		type: file.type || "Unknown",
	// 		date: new Date().toLocaleDateString(),
	// 	};

	// 	// Add the new document to the list
	// 	addDocumentRow(newDocument);

	// 	// Reset the file input
	// 	fileInput.value = "";
	// });
	const documents = [
		{ name: "Invoice_2023.pdf", type: "PDF", date: "01/01/2023" },
		{ name: "Report_Q1.png", type: "Image", date: "02/15/2023" },
	];

	const documentRows = document.getElementById("document-rows");

	function addDocumentRow(doc) {
		const row = document.createElement("tr");
		row.classList.add("border-b");

		row.innerHTML = `
    <td class="py-2">${doc.name}</td>
    <td class="py-2">${doc.type}</td>
    <td class="py-2">${doc.date}</td>
    <td class="py-2">
    <button class="text-blue-500 hover:underline" onclick="viewDocument('${doc.name}')">View</button>
    <button class="text-green-500 hover:underline ml-2" onclick="downloadDocument('${doc.name}')">Download</button>
    <button class="text-red-500 hover:underline ml-2" onclick="deleteDocument(this)">Delete</button>
    </td>
`;

		// documentRows.appendChild(row);
	}

	// Add initial documents
	documents.forEach(addDocumentRow);

	function viewDocument(name) {
		alert(`Viewing ${name}`);
	}

	function downloadDocument(name) {
		alert(`Downloading ${name}`);
	}

	function deleteDocument(button) {
		const row = button.parentElement.parentElement;
		row.remove();
	}

	const [file, setFile] = useState(null);
	const [formData,setFormData] = useState(null);
	const handleFileChange = (event) => {
	  setFile(event.target.files[0]);
	};
  
>>>>>>> c691208 ( pages added)

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

      console.log(response.data);
      toast.dismiss(loading);
      toast.success("File uploaded successfully.");
      setFile(null);
      setTitle("");
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
              placeholder="Enter title"
              value={title}
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
              {filteredPdfs.length > 0 ? (
                filteredPdfs.map((e) => (
                  <tr key={e._id}>
                    <td className="py-2 px-4 text-sm">{e.title}</td>
                    <td className="py-2 px-4 text-sm">{e.type}</td>
                    <td className="py-2 px-4 text-sm">{e.dateUploaded}</td>
                    <td className="py-2 px-4 text-sm">
                      <button
                        className="px-2 py-1 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-800"
                        onClick={() => {
                          showPdf(e.pdf);
                        }}
                      >
                        Show {e.type}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-600">
                    No documents found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
