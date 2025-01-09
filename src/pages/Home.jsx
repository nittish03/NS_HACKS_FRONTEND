import { NavLink } from "react-router-dom";
import {Container} from "../index.js"

export default function Home() {


	return (
		<div className="py-8">
			<Container>
				{/* <!-- Header --> */}

				<header className="mb-6">
					<h1 className="text-4xl font-bold text-gray-800">
						Welcome to Invoice Processor Tool
					</h1>
					<p className="text-gray-600 mt-2">
						Your one-stop solution for managing invoices and documents. <br />
						Prepared by Team AlphaBots
					</p>
				</header>

				{/* <!-- Quick Links Section --> */}

				<section className="mb-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						Quick Links
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<NavLink
							to="/upload"
							className="p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition"
						>
							<h3 className="text-lg font-bold text-gray-800">
								Upload Document
							</h3>
							<p className="text-gray-600 mt-2">
								Quickly upload and process your invoices.
							</p>
						</NavLink>
						<NavLink
							to="/"
							className="p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition"
						>
							<h3 className="text-lg font-bold text-gray-800">
								View Documents
							</h3>
							<p className="text-gray-600 mt-2">
								Access all your uploaded documents.
							</p>
						</NavLink>
						<NavLink
							to="/findDoc"
							className="p-6 bg-white rounded-lg shadow hover:bg-blue-100 transition"
						>
							<h3 className="text-lg font-bold text-gray-800">
								Generate Reports
							</h3>
							<p className="text-gray-600 mt-2">
								Create reports from your processed data.
							</p>
						</NavLink>
					</div>
				</section>
			</Container>
		</div>
	);
}
