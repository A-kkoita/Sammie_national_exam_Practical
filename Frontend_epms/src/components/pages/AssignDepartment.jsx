import axios from "axios";
import { useEffect, useState } from "react";

function AssignDepartment() {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [data, setData] = useState({ employeeNumber: "", department_code: "" });

  // Fetch employees
  useEffect(() => {
    axios.get("http://localhost:3000/employee")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));

    axios.get("http://localhost:3000/department")
      .then(res => setDepartments(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.employeeNumber || !data.department_code) return alert("Select employee and department");

    try {
      const res = await axios.put("http://localhost:3000/employee/assign-department", data);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to assign department");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold text-center text-blue-600">Assign Department</h2>

        {/* Employee dropdown */}
        <select name="employeeNumber" value={data.employeeNumber} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
          <option value="">Select Employee</option>
          {employees.map(emp => (
            <option key={emp.employeeNumber} value={emp.employeeNumber}>
              {emp.FirstName} {emp.LastName}
            </option>
          ))}
        </select>

        {/* Department dropdown */}
        <select name="department_code" value={data.department_code} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
          <option value="">Select Department</option>
          {departments.map(dept => (
            <option key={dept.department_code} value={dept.department_code}>
              {dept.DepartmentName}
            </option>
          ))}
        </select>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Assign Department
        </button>
      </form>
    </div>
  );
}

export default AssignDepartment;
