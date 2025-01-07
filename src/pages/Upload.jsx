export default function Upload() {
	return (
		<div class="container mx-auto p-6">
			{/* <!-- Header --> */}
			<header class="mb-6">
				<h1 class="text-3xl font-bold text-gray-800">Manage Documents</h1>
				<p class="text-gray-600">
					Upload, view, and manage your documents in one place...
				</p>
			</header>

			{/* <!-- Upload Section --> */}
			<section class="bg-white p-6 rounded-lg shadow mb-8">
				<h2 class="text-xl font-semibold text-gray-800 mb-4">
					Upload a New Document
				</h2>
				<form id="upload-form" class="flex items-center space-x-4">
					<input
						type="file"
						id="file-input"
						class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
						accept=".pdf,.jpg,.jpeg,.png"
					/>
					<button
						type="submit"
						class="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
					>
						Upload
					</button>
				</form>
			</section>

			{/* <!-- Search Bar --> */}
			<div class="flex justify-between items-center mb-4">
				<input
					type="text"
					id="search-bar"
					placeholder="Search documents..."
					class="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			{/* <!-- Documents List --> */}
			<section>
				<h2 class="text-xl font-semibold text-gray-800 mb-4">Your Documents</h2>
				<div id="documents-list" class="bg-white rounded-lg shadow p-6">
					<table class="w-full text-left text-gray-800">
						<thead class="border-b">
							<tr>
								<th class="py-2">Name</th>
								<th class="py-2">Type</th>
								<th class="py-2">Date Uploaded</th>
								<th class="py-2">Actions</th>
							</tr>
						</thead>
						<tbody id="document-rows">
							{/* <!-- Document rows will be dynamically added here --> */}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
}
