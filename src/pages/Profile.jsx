export default function Profile() {

	return (
		<>
			<div class="container mx-auto p-6">
				{/* <!-- Header --> */}
				<header class="mb-6 text-center">
					<h1 class="text-3xl font-bold text-gray-800">User Profile</h1>
					<p class="text-gray-600">
						Manage your account settings and preferences.
					</p>
				</header>

				{/* <!-- Profile Section --> */}
				<section class="bg-white p-6 rounded-lg shadow mb-8">
					<div class="flex items-center space-x-6">
						{/* <!-- Profile Picture --> */}
						<div>
							<img
								id="profile-pic"
								src="https://via.placeholder.com/150"
								alt="Profile Picture"
								class="w-24 h-24 rounded-full object-cover"
							/>
							<button
								id="upload-pic-btn"
								class="mt-2 text-blue-500 hover:underline"
							>
								Change Picture
							</button>
							<input
								type="file"
								id="upload-pic-input"
								class="hidden"
								accept=".jpg,.jpeg,.png"
							/>
						</div>

						{/* <!-- User Details --> */}
						<div>
							<h2 class="text-xl font-bold text-gray-800" id="user-name">
								John Doe
							</h2>
							<p class="text-gray-600" id="user-email">
								johndoe@example.com
							</p>
						</div>
					</div>
				</section>

				{/* <!-- Edit Profile Section --> */}
				<section class="bg-white p-6 rounded-lg shadow mb-8">
					<h2 class="text-xl font-semibold text-gray-800 mb-4">Edit Profile</h2>
					<form id="edit-profile-form" class="space-y-4">
						{/* <!-- Name --> */}
						<div>
							<label class="block text-sm font-medium text-gray-700">
								Full Name
							</label>
							<input
								type="text"
								id="edit-name"
								class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								value="John Doe"
							/>
						</div>
						{/* <!-- Email --> */}
						<div>
							<label class="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								id="edit-email"
								class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								value="johndoe@example.com"
							/>
						</div>
						<button
							type="submit"
							class="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
						>
							Save Changes
						</button>
					</form>
				</section>

				{/* <!-- Change Password Section --> */}
				<section class="bg-white p-6 rounded-lg shadow">
					<h2 class="text-xl font-semibold text-gray-800 mb-4">
						Change Password
					</h2>
					<form id="change-password-form" class="space-y-4">
						{/* <!-- Current Password --> */}
						<div>
							<label class="block text-sm font-medium text-gray-700">
								Current Password
							</label>
							<input
								type="password"
								id="current-password"
								class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>
						{/* <!-- New Password --> */}
						<div>
							<label class="block text-sm font-medium text-gray-700">
								New Password
							</label>
							<input
								type="password"
								id="new-password"
								class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>
						{/* <!-- Confirm Password --> */}
						<div>
							<label class="block text-sm font-medium text-gray-700">
								Confirm Password
							</label>
							<input
								type="password"
								id="confirm-password"
								class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>
						<button
							type="submit"
							class="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
						>
							Update Password
						</button>
					</form>
				</section>
			</div>
		</>
	);
}
