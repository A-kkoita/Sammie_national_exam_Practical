import axios from "axios";
import { useState } from "react";

function Salary() {
  const [salaryData, setSalaryData] = useState({
    employeeNumber: "",
    month: "",
  });

  const [result, setResult] = useState(null);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleChange = (e) => {
    setSalaryData({
      ...salaryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/salaries", salaryData);
      setResult(res.data); // store the returned salary info
      alert("Salary generated successfully!");
    } catch (err) {
      console.error("Error generating salary:", err);
      alert("Failed to generate salary");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center text-blue-600">
          Generate Salary
        </h2>

        <input
          type="number"
          name="employeeNumber"
          placeholder="Employee Number"
          value={salaryData.employeeNumber}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <select
          name="month"
          value={salaryData.month}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select Month</option>
          {months.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Generate
        </button>
      </form>

      {/* Show the calculated salary */}
      {result && (
        <div className="mt-6 bg-white p-4 rounded shadow w-full max-w-md">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">Salary Details</h3>
          <p>Gross Salary: {result.grossSalary}</p>
          <p>Total Deduction: {result.totalDeduction}</p>
          <p>Net Salary: {result.netSalary}</p>
        </div>
      )}
    </div>
  );
}

export default Salary;
