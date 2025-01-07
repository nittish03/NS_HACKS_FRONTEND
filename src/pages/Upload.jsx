import React,{useState} from 'react'





export default function Upload() {






	const [file,setFile] = useState("")





	
	return (
		<div className="container mx-auto p-6">
			{/* Header */}
			<header className="mb-6 text-center sm:text-left">
				<h1 className="text-3xl font-bold text-gray-800">Manage Documents</h1>
				<p className="text-gray-600">
					Upload, view, and manage your documents in one place...
				</p>
			</header>

			{/* Upload Section */}
			<section className="bg-white p-6 rounded-lg shadow mb-8">
				<h2 className="text-xl font-semibold text-gray-800 mb-4">
					Upload a New Document
				</h2>
				<form
					id="upload-form"
					className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
				>
					<input
						type="file"
						id="file-input"
						className="block w-full sm:w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
						accept=".pdf,.jpg,.jpeg,.png"
					/>
					<button
						type="submit"
						className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Upload
					</button>
				</form>
			</section>

			{/* Search Bar */}
			<div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
				<input
					type="text"
					id="search-bar"
					placeholder="Search documents..."
					className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			{/* Documents List */}
			<section>
	<h2 className="text-xl font-semibold text-gray-800 mb-4">
		Your Documents
	</h2>
	<div
		id="documents-list"
		className="bg-white rounded-lg shadow p-6 overflow-x-auto"
	>
		<table className="min-w-full text-left text-gray-800">
			<thead className="border-b">
				<tr>
					<th className="py-2 px-4 text-sm font-medium">Name</th>
					<th className="py-2 px-4 text-sm font-medium">Type</th>
					<th className="py-2 px-4 text-sm font-medium">
						Date Uploaded
					</th>
					<th className="py-2 px-4 text-sm font-medium">Actions</th>
				</tr>
			</thead>
			<tbody id="document-rows">
				{/* Example row */}
				<tr className="border-b">
					<td className="py-2 px-4 text-sm">Sample Document</td>
					<td className="py-2 px-4 text-sm">PDF</td>
					<td className="py-2 px-4 text-sm">2025-01-01</td>
					<td className="py-2 px-4 text-sm">
						<button className="text-blue-500 hover:underline">
							View
						</button>
					</td>
				</tr>
				{/* Add more rows dynamically */}
			</tbody>
		</table>
	</div>
</section>

		</div>
	);
}
