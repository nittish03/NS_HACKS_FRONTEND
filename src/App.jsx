import { useState } from "react";
import "./App.css";
import {UploadPage} from "./index.js"
import { Routes, Route } from "react-router-dom";
import Qrcode from "./components/Qrcode";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={< UploadPage />} />
			</Routes>
		</>
	);
}

export default App;
