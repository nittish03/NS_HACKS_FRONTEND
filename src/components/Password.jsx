import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const PasswordInputPage = ({ realPassword, onSuccess, onClose , file, fileId}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [validity, setValidity] = useState("");

  const navigate = useNavigate();

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
				state: {
					result: aiResponse.data.candidates[0].content.parts[0].text,
				},
			});
		} catch (e) {
			console.log(e);
			toast.dismiss(loading);
		}
	};

  const handleSubmit = async (e) => {
    e.preventDefault();		
    setLoading(true);
    setError("");
	console.log(realPassword, password);
    try {
      if (password === realPassword) {

        if(onSuccess === "navigate"){
			handleValidity(fileId);
		}
        else if(onSuccess === "open")   window.open(`${import.meta.env.VITE_BASE_URL}/uploads/${file}`, "_blank");
        
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
			<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
				<h2 className="text-xl font-semibold mb-4 text-center">
					Enter Password
				</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					{error && <p className="text-red-500 text-sm">{error}</p>}
					<div className="flex justify-between">
						<button
							type="submit"
							className={`px-4 py-2 rounded-lg text-white ${
								loading
									? "bg-blue-300 cursor-not-allowed"
									: "bg-blue-500 hover:bg-blue-600"
							}`}
							disabled={loading}
						>
							{loading ? "Verifying..." : "Submit"}
						</button>
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PasswordInputPage;