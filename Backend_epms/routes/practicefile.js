// const express =require('express');
// const  router=express.Router();
// const db= require("../config/db");

// router.post("/",(req,res)=>{

//     const[employeeNumber,month]=req.body;

//     const sql=`
//     SELECT e.grossSalary  
//     FROM Employee e
//     JOIN Department d ON e.departmentCode = department.Code
//     WHERE e.employeeNumber=?
//     `
//     db.query(sql,[employeeNumber],(err,result) => {
        
//         if(err) return res.status(500).json(err);

//         if(result.length===0) {
//             return res.status(404).json({message:"Employee not found"});
//         } 

//     })
// })