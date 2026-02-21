import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Employee from "./components/pages/employee";
import SalaryReport from "./components/pages/SalaryReport";
import Department from "./components/pages/department";
import SalaryForm from "./components/pages/salaryForm"; 
import AssignDepartment from "./components/pages/AssignDepartment";
import Home from "./components/pages/Home"; 
// import Login from "./components/pages/signup";
// import Signup from "./components/pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}

        <Route path="/employee" element={<Employee />} />
        <Route path="/department" element={<Department />} />
        <Route path="/salaryForm" element={<SalaryForm />} /> {/* add this */}
        <Route path="/report" element={<SalaryReport />} />
        <Route path="/assign-department" element={<AssignDepartment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
