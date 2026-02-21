// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// function Signup() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
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
//       await axios.post(
//         "http://localhost:3000/api/auth/signup",
//         formData
//       );

//       alert("Account created successfully 🎉");
//       navigate("/login");
//     } catch (error) {
//       alert(error.response?.data?.error || "Signup failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
//           Create Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             onChange={handleChange}
//             required
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//           />

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
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm">
//           Already have an account?
//           <Link to="/login" className="text-blue-600 ml-1 font-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;
