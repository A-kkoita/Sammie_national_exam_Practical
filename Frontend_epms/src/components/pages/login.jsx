// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/auth/login",
//         formData
//       );

//       localStorage.setItem("token", response.data.token);
//       alert("Login successful 🎉");

//       navigate("/employee"); // redirect after login
//       window.location.reload(); // refresh navbar state
//     } catch (error) {
//       alert(error.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
//           Login to EPMS
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//             required
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm">
//           Don't have an account?
//           <Link to="/signup" className="text-blue-600 ml-1 font-semibold">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;
