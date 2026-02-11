const express=require ('express');
const cors=require('cors');

const employeeRoutes=require("./routes/employee.routes");
const salaryRoutes=require("/routes/salary.routes");
const departmentRoutes=require("/routes/department.routes");

const app=express();

app.use(cors());
app.use(express.json());

app.use("/employee",employeeRoutes);
app.use("/department",departmentRoutes);
app.use("/salaries",salaryRoutes);

app.listen(3000,()=>{
    console.log(`Server running on http//localhost 3000`)
})