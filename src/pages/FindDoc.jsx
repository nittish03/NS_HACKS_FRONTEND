import { Container } from "../index.js";
import PasswordInputPage from "../components/Password.jsx";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FindDoc() {
	const [fileName, setFileName] = useState("");
	const [successFunction, setSuccessFunction] = useState("");
	const [checkPassword, setCheckPassword] = useState(false);
	const [docsList, setDocsList] = useState([]);
	const [filteredPdfs, setFilteredPdfs] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const allDocs = () => {
			axios
				.get(`${import.meta.env.VITE_BASE_URL}/get-uploads`)
				.then((response) => {
					setDocsList(response.data.data);
				})
				.catch((error) => {
					console.error(error);
				});
		};

		allDocs();
	}, [docsList]);

	useEffect(() => {
		const filterList = () => {
			const filtered = docsList.filter((pdf) =>
				pdf.title.toLowerCase().includes(fileName.toLowerCase())
			);
			setFilteredPdfs(filtered);
		};

		filterList();
	}, [fileName, docsList]);

	return (
		<Container>
			<div className="flex flex-col gap-4 justify-center items-center h-screen">
				<h1 className="text-4xl font-bold text-gray-800">Enter file name...</h1>
				<input
					type="text"
					value={fileName}
					placeholder="file name without extension"
					className="h-10 w-80 border border-gray-300 rounded-md p-2"
					onChange={(e) => setFileName(e.target.value)}
				/>
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
							{filteredPdfs.length > 0 && fileName ? (
								filteredPdfs.map((e) => (
									<tr key={e._id}>
										<td className="py-2 px-4 text-sm">{e.title}</td>
										<td className="py-2 px-4 text-sm">{e.type}</td>
										<td className="py-2 px-4 text-sm">{e.dateUploaded}</td>
										<td className="py-2 px-4 text-sm">
											<div className="flex">
												<button
													className="mx-2 px-2 py-1 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-800"
													onClick={() => {
														setSuccessFunction("open");
														setCheckPassword(true);
														
														// window.open(
														// 	`${import.meta.env.VITE_BASE_URL}/uploads/${
														// 		e.pdf
														// 	}`,
														// 	"_blank"
														// );
													}}
												>
													Show {e.type}
												</button>
												<button
													className="mx-2 px-2 py-1 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-800"
													onClick={() => {
														setSuccessFunction("navigate");
														setCheckPassword(true);
														// navigate(`/report/${e.pdf}`);
													}}
												>
													Show Report
												</button>
											</div>
											{ checkPassword && (<PasswordInputPage
											// realPassword={e.password}
											realPassword="Baka"
											onSuccess = {successFunction}
											onClose={() => setCheckPassword(false)}
											/>) }
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
			</div>
		</Container>
	);
}
