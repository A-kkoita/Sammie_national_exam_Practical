import axios from "axios";
import { useState } from "react";

function Department() {
  const [department, setDepartment] = useState({
    deployment_code: "",
    DepartmentName: "",
    GrossSalary: "",
  });

  const handleChange = (e) => {
    setDepartment({
      ...department,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://localhost:4000/department", department);
    alert("Department data recorded");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center text-blue-600">
          Add Department
        </h2>

        <input
          type="text"
          name="DepartmentName"
          placeholder="Department Name"
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="GrossSalary"
          placeholder="Gross Salary"
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Department;
