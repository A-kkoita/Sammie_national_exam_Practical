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

router.get("/", (req, res) => {
  const sql = `SELECT department_code, DepartmentName FROM Department`;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
