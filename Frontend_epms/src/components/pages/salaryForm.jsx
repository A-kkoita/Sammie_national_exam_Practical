import axios from "axios";
import { useState, useEffect } from "react";

function SalaryForm() {
  const [employees, setEmployees] = useState([]);
  const [salaryData, setSalaryData] = useState({
    employeeNumber: "",
    month: "",
  });

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  // Fetch employees
  useEffect(() => {
    axios.get("http://localhost:3000/employee")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setSalaryData({ ...salaryData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!salaryData.employeeNumber || !salaryData.month) return alert("Select employee and month");

    try {
      const res = await axios.post("http://localhost:3000/salaries", salaryData);
      alert(`Salary Generated! Net: ${res.data.netSalary}`);
    } catch (err) {
      console.error("Error generating salary:", err);
      alert("Failed to generate salary. Check console.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold text-center text-blue-600">Generate Salary</h2>

        {/* Employee dropdown */}
        <select
          name="employeeNumber"
          value={salaryData.employeeNumber}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">Select Employee</option>
          {employees.map(emp => (
            <option key={emp.employeeNumber} value={emp.employeeNumber}>
              {emp.FirstName} {emp.LastName}
            </option>
          ))}
        </select>

        {/* Month dropdown */}
        <select
          name="month"
          value={salaryData.month}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">Select Month</option>
          {months.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Generate Salary
        </button>
      </form>
    </div>
  );
}

export default SalaryForm;
