export default function Profile() {
	return (
		<>
			<div className="container mx-auto p-6">
				{/* <!-- Header --> */}
				<header className="mb-6 text-center">
					<h1 className="text-3xl font-bold text-gray-800">User Profile</h1>
					<p className="text-gray-600">
						Manage your account settings and preferences.
					</p>
				</header>

				{/* <!-- Profile Section --> */}
				<section className="bg-white p-6 rounded-lg shadow mb-8">
					<div className="flex items-center space-x-6">
						{/* <!-- Profile Picture --> */}
						<div>
							<img
								id="profile-pic"
								src="public/user.jpg"
								alt="Profile Picture"
								className="w-24 h-24 rounded-full object-cover"
							/>
							<button
								id="upload-pic-btn"
								className="mt-2 text-blue-500 hover:underline"
							>
								Change Picture
							</button>
							<input
								type="file"
								id="upload-pic-input"
								className="hidden"
								accept=".jpg,.jpeg,.png"
							/>
						</div>

						{/* <!-- User Details --> */}
						<div>
							<h2 className="text-xl font-bold text-gray-800" id="user-name">
								Team AlphaBots
							</h2>
							<p className="text-gray-600" id="user-email">
								team@AlphaBots.com
							</p>
						</div>
					</div>
				</section>

				{/* <!-- Edit Profile Section --> */}
				<section className="bg-white p-6 rounded-lg shadow mb-8">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						Edit Profile
					</h2>
					<form id="edit-profile-form" className="space-y-4">
						{/* <!-- Name --> */}
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Full Name
							</label>
							<input
								type="text"
								id="edit-name"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								value="John Doe"
							/>
						</div>
						{/* <!-- Email --> */}
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								id="edit-email"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								value="johndoe@example.com"
							/>
						</div>
						<button
							type="submit"
							className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
						>
							Save Changes
						</button>
					</form>
				</section>

				{/* <!-- Change Password Section --> */}
				<section className="bg-white p-6 rounded-lg shadow">
					<h2 className="text-xl font-semibold text-gray-800 mb-4">
						Change Password
					</h2>
					<form id="change-password-form" className="space-y-4">
						{/* <!-- Current Password --> */}
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Current Password
							</label>
							<input
								type="password"
								id="current-password"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>
						{/* <!-- New Password --> */}
						<div>
							<label className="block text-sm font-medium text-gray-700">
								New Password
							</label>
							<input
								type="password"
								id="new-password"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>
						{/* <!-- Confirm Password --> */}
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Confirm Password
							</label>
							<input
								type="password"
								id="confirm-password"
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
						</div>
						<button
							type="submit"
							className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
						>
							Update Password
						</button>
					</form>
				</section>
			</div>
		</>
	);
}
