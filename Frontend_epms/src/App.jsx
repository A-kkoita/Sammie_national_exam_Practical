import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Employee from "./components/pages/employee";
import SalaryReport from "./components/pages/SalaryReport";
import Department from "./components/pages/department";
import SalaryForm from "./components/pages/salaryForm"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/employee" element={<Employee />} />
        <Route path="/department" element={<Department />} />
        <Route path="/salaryForm" element={<SalaryForm />} /> {/* add this */}
        <Route path="/report" element={<SalaryReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
