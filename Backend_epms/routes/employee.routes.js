const express=require("express");
const router=express.Router();
const db=require("./config/db");

router.post("/",(req,res)=>{
    const emp=req.body;

    const sql=`
    INSERT INTO Employee
    (employeeNumber, FirstName, LastName,address, Gender,Position,department_code)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(sql,[
        emp.employeeNumber,
        emp.FirstName,
        emp.LastName,
        emp.address,
        emp.Gender,
        emp.Position,
        emp.department_code
    ],(err) =>{
        if(err) return res.status(500).json(err);
        res.json({message:"Employee  succefully added"});
    });
});

module.exports=router;