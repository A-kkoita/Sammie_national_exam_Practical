const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Add employee (already exists)
router.post("/", (req, res) => {
  const emp = req.body;
  const sql = `
    INSERT INTO Employee
    (FirstName, LastName, Address, Gender, Position, department_code)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [
    emp.FirstName,
    emp.LastName,
    emp.Address,
    emp.Gender,
    emp.Position,
    emp.department_code
  ], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Employee successfully added" });
  });
});

// GET all employees (for dropdown in frontend)
router.get("/", (req, res) => {
  const sql = "SELECT employeeNumber, FirstName, LastName FROM Employee";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result); // returns array of employees
  });
});

// Assign employee to a department
router.put("/assign-department", (req, res) => {
  const { employeeNumber, department_code } = req.body;

  if (!employeeNumber || !department_code) {
    return res.status(400).json({ message: "Employee and department required" });
  }

  const sql = `UPDATE Employee SET department_code = ? WHERE employeeNumber = ?`;

  db.query(sql, [department_code, employeeNumber], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Department assigned successfully" });
  });
});



module.exports = router;
