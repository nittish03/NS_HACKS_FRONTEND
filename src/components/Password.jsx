import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordInputPage = ({ realPassword, onSuccess, onClose }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (password === realPassword) {

        if(onSuccess === "navigate")    navigate(`/report/${e.pdf}`);
        else if(onSuccess === "open")   window.open(`${import.meta.env.VITE_BASE_URL}/uploads/${e.pdf}`, "_blank");
        
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
				<form onSubmit={handleSubmit()} className="space-y-4">
					<input
						type="password"
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