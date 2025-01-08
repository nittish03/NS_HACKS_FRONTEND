import { useState } from "react";
import "./App.css";
import {UploadPage, Home, Profile, Dashboard} from "./index.js"
import { Routes, Route } from "react-router-dom";
import Qrcode from "./components/Qrcode";
import Navbar from "./components/Navbar";
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<>
			<Navbar />
      <Toaster/>
			<Routes>
				<Route path="/" element={< Home />} />
				<Route path="/upload" element={< UploadPage />} />
				<Route path="/profile" element={< Profile />} />
				<Route path="/dashboard" element={< Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
