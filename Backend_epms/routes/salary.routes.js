const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Generate salary
router.post("/", (req, res) => {
  const { employeeNumber, month } = req.body;

  const sql = `
    SELECT d.GrossSalary
    FROM Employee e
    JOIN Department d ON e.department_code = d.department_code
    WHERE e.employeeNumber = ?
  `;

  db.query(sql, [employeeNumber], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const grossSalary = parseFloat(result[0].GrossSalary);

    // Calculate deductions
    const tax = grossSalary * 0.10;
    const pension = grossSalary * 0.05;
    const totalDeduction = tax + pension;
    const netSalary = grossSalary - totalDeduction;

    // Insert into Salary table
    const insertSql = `
      INSERT INTO Salary (employeeNumber, MonthOfPayment, TotalDeduction, NetSalary, GrossSalary)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(insertSql, [employeeNumber, month, totalDeduction, netSalary, grossSalary], (err) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({
        message: "Salary generated",
        grossSalary,
        totalDeduction,
        netSalary,
        month
      });
    });
  });
});

// Get salary report for a month
router.get("/report/:month", (req, res) => {
  const month = req.params.month;

  const sql = `
    SELECT 
      e.employeeNumber,
      e.FirstName,
      e.LastName,
      d.DepartmentName,
      d.GrossSalary,
      s.TotalDeduction,
      s.NetSalary,
      s.MonthOfPayment
    FROM Salary s
    JOIN Employee e ON s.employeeNumber = e.employeeNumber
    JOIN Department d ON e.department_code = d.department_code
    WHERE s.MonthOfPayment = ?
  `;

  db.query(sql, [month], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

module.exports = router;
