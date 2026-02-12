const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Add department
router.post("/", (req, res) => {
  const dept = req.body;

  const sql = `
    INSERT INTO Department (department_code, departmentName, grossSalary)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [
    dept.department_code,
    dept.DepartmentName,
    dept.GrossSalary
  ], (err) => {
    if (err) {
      console.log("Database error:", err);
      return res.status(500).json(err);
    }

    res.json({ message: "Department added" });
  });
});

module.exports = router;
