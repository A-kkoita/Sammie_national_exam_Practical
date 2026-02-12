// index.js
const express = require("express");
const cors = require("cors");
const db = require("./config/db"); // your DB config
const salaryRouter = require("./routes/salary.routes"); // import your salary router
const employeeRouter = require("./routes/employee.routes"); // if you have employee routes
const departmentRouter = require("./routes/department.routes"); // if you have department routes

const app = express();
app.use(cors());
app.use(express.json());

// Mount routers
app.use("/salaries", salaryRouter);       // <--- THIS is why /salaries works
app.use("/employee", employeeRouter);     // for fetching employees
app.use("/department", departmentRouter); // for departments

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
