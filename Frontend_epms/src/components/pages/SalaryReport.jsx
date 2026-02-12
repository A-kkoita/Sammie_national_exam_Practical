import axios from "axios";
import { useState, useEffect } from "react";

function SalaryReport() {
  const [month, setMonth] = useState("");
  const [report, setReport] = useState([]);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const fetchReport = async () => {
    if (!month) return;
    try {
      const res = await axios.get(`http://localhost:3000/salaries/report/${month}`);
      setReport(res.data);
    } catch (err) {
      console.error("Error fetching report:", err);
      alert("Failed to fetch report");
    }
  };

  useEffect(() => {
    fetchReport();
  }, [month]); // fetch report whenever month changes

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-4">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Salary Report</h2>

      <select
        name="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="w-full max-w-md border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Month</option>
        {months.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <table className="w-full max-w-4xl bg-white shadow rounded overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2">Employee Number</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Gross Salary</th>
            <th className="px-4 py-2">Deductions</th>
            <th className="px-4 py-2">Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {report.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4">No data available</td>
            </tr>
          ) : (
            report.map((r) => (
              <tr key={r.employeeNumber + r.month} className="text-center border-b">
                <td className="px-4 py-2">{r.employeeNumber}</td>
                <td className="px-4 py-2">{r.firstName}</td>
                <td className="px-4 py-2">{r.lastName}</td>
                <td className="px-4 py-2">{r.departmentName}</td>
                <td className="px-4 py-2">{r.grossSalary}</td>
                <td className="px-4 py-2">{r.totalDeduction}</td>
                <td className="px-4 py-2">{r.netSalary}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SalaryReport;
