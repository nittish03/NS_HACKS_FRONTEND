import "./App.css";
import {
	UploadPage,
	Profile,
	Dashboard,

	Report,
} from "./index.js";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<Navbar />
			<Toaster />
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/" element={<UploadPage />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/report" element={<Report />} />
			</Routes>
		</>
	);
}

export default App;
