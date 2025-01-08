export default function Profile() {
	// Handle Profile Picture Upload
	// document.getElementById("upload-pic-btn").addEventListener("click", () => {
	// 	document.getElementById("upload-pic-input").click();
	// });

	// document
	// 	.getElementById("upload-pic-input")
	// 	.addEventListener("change", (e) => {
	// 		const file = e.target.files[0];
	// 		if (file) {
	// 			const reader = new FileReader();
	// 			reader.onload = () => {
	// 				document.getElementById("profile-pic").src = reader.result;
	// 			};
	// 			reader.readAsDataURL(file);
	// 		}
	// 	});

	// Handle Profile Edit
	// document
	// 	.getElementById("edit-profile-form")
	// 	.addEventListener("submit", (e) => {
	// 		e.preventDefault();

	// 		const name = document.getElementById("edit-name").value;
	// 		const email = document.getElementById("edit-email").value;

	// 		if (name && email) {
	// 			document.getElementById("user-name").textContent = name;
	// 			document.getElementById("user-email").textContent = email;
	// 			alert("Profile updated successfully!");
	// 		} else {
	// 			alert("Please fill out all fields.");
	// 		}
	// 	});

	// Handle Password Change
	// document
	// 	.getElementById("change-password-form")
	// 	.addEventListener("submit", (e) => {
	// 		e.preventDefault();

	// 		const currentPassword = document.getElementById("current-password").value;
	// 		const newPassword = document.getElementById("new-password").value;
	// 		const confirmPassword = document.getElementById("confirm-password").value;

	// 		if (!currentPassword || !newPassword || !confirmPassword) {
	// 			alert("All fields are required.");
	// 			return;
	// 		}

	// 		if (newPassword !== confirmPassword) {
	// 			alert("New password and confirmation do not match.");
	// 			return;
	// 		}

	// 		alert("Password updated successfully!");
	// 	});

	// ye sab kr skte h

	/*
Extensions
	1.	Backend Integration:
	•	Save profile updates and password changes in a database.
	•	Use APIs to fetch and update data.
	2.	Error Validation:
	•	Add better validation and error messages for form fields.
	3.	Responsive Styling:
	•	Test on mobile devices and refine the design for smaller screens.
	4.	Password Strength Meter:
	•	Display a visual indicator for password strength.
*/

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
