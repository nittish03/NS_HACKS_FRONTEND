import "./App.css";
import {UploadPage, Home, Profile, Dashboard, FindDoc, Report} from "./index.js"
import { Routes, Route } from "react-router-dom";
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
				<Route path="/findDoc" element={< FindDoc />} />
				<Route path = "/report/:url" element={<Report/>}/>
			</Routes>
		</>
	);
}

export default App;
