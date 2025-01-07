import { useState } from "react";
import "./App.css";
import {UploadPage} from "./index.js"
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
				<Route path="/" element={< UploadPage />} />
			</Routes>
		</>
	);
}

export default App;
