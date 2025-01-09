import { Container } from "../index.js";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FindDoc() {
	const [fileName, setFileName] = useState("");
	const [fileUrl, setFileUrl] = useState(undefined);
	const [docsList, setDocsList] = useState([]);
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
		const getUrl = () =>
			docsList.forEach((element) => {
				if (element.title === fileName) {
					setFileUrl(element.pdf);
				}
			});

		getUrl();
	}, [docsList, fileName]);


	return (
		<Container>
			<div className="flex flex-col gap-4 justify-center items-center h-screen">
				<h1 className="text-4xl font-bold text-gray-800">Enter file name...</h1>
				<input
					type="text"
					placeholder="file name without extension"
					className="h-10 w-80 border border-gray-300 rounded-md p-2"
					onChange={(e) => setFileName(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
					onClick={() => {
						window.open(
							`${import.meta.env.VITE_BASE_URL}/uploads/${fileUrl}`,
							"_blank"
						);
					}}
				>
					see file
				</button>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
					onClick={() => {
						console.log(fileUrl);
						navigate(`/report/${fileUrl}`);
					}}
				>
					see report
				</button>
			</div>
		</Container>
	);
}
