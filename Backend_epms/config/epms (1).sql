-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2026 at 08:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `epms`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_code` varchar(10) NOT NULL,
  `DepartmentName` varchar(100) NOT NULL,
  `GrossSalary` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_code`, `DepartmentName`, `GrossSalary`) VALUES
('DO1', 'Debugging', '400000'),
('NIT_250', 'Networking', '500000'),
('SWD_14', 'Software', '40000');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employeeNumber` int(11) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Gender` enum('Male','Female') DEFAULT NULL,
  `Position` varchar(100) DEFAULT NULL,
  `department_code` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employeeNumber`, `FirstName`, `LastName`, `Address`, `Gender`, `Position`, `department_code`) VALUES
(5, 'Aisha', 'koita', 'kagugu', 'Female', 'Ceo', 'DO1'),
(6, 'khaitou', 'koita', 'kagugu', 'Female', 'HR', 'DO1'),
(7, 'hawa', 'koita', 'kagugu', 'Female', 'HR', 'NIT_250'),
(8, 'yann', 'Kamali', 'kagugu', 'Male', 'HR', NULL),
(9, 'Joy', 'Mbarushimana', 'ruyenzi', 'Female', 'Manager', 'SWD_14'),
(10, 'kadi', 'koita', 'kagugu', '', 'Developer', 'SWD_14');

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

CREATE TABLE `salary` (
  `TotalDeduction` varchar(100) DEFAULT NULL,
  `NetSalary` varchar(100) DEFAULT NULL,
  `MonthOfPayment` varchar(100) DEFAULT NULL,
  `GrossSalary` varchar(100) DEFAULT NULL,
  `employeeNumber` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`TotalDeduction`, `NetSalary`, `MonthOfPayment`, `GrossSalary`, `employeeNumber`) VALUES
('60000', '340000', 'January', '400000', 5),
('60000', '340000', 'January', '400000', 6),
('75000', '425000', 'February', '500000', 7),
('6000', '34000', 'January', '40000', 9),
('6000', '34000', 'April', '40000', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_code`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employeeNumber`),
  ADD KEY `fk_employee_department` (`department_code`);

--
-- Indexes for table `salary`
--
ALTER TABLE `salary`
  ADD KEY `fk_salary_employee` (`employeeNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employeeNumber` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `fk_employee_department` FOREIGN KEY (`department_code`) REFERENCES `department` (`department_code`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `salary`
--
ALTER TABLE `salary`
  ADD CONSTRAINT `fk_salary_employee` FOREIGN KEY (`employeeNumber`) REFERENCES `employee` (`employeeNumber`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
