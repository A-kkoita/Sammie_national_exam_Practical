import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <h1 className="text-white font-semibold">EPMS</h1>

        <div className="flex space-x-6">
          <Link to="/employee" className="text-white hover:text-blue-200">
            Employee
          </Link>
          <Link to="/department" className="text-white hover:text-blue-200">
            Department
          </Link>
          <Link to="/salaryForm" className="text-white hover:text-blue-200">
            Payroll
          </Link>
          <Link to="/report" className="text-white hover:text-blue-200">
            Report
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
