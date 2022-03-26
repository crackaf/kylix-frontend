-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2022 at 11:36 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kylix`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_types`
--

CREATE TABLE `contact_types` (
  `contact_id` int(11) NOT NULL,
  `contact_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_types`
--

INSERT INTO `contact_types` (`contact_id`, `contact_name`) VALUES
(1, 'mobile_phone'),
(2, 'landline'),
(3, 'facebook');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_appointment`
--

CREATE TABLE `doctor_appointment` (
  `appointment_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_clinics`
--

CREATE TABLE `doctor_clinics` (
  `doctor_id` int(11) NOT NULL,
  `clinic_name` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `geo_location` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_contact`
--

CREATE TABLE `doctor_contact` (
  `doctor_id` int(11) NOT NULL,
  `contact_id` int(11) NOT NULL,
  `contact_data` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_schedule`
--

CREATE TABLE `doctor_schedule` (
  `doctor_id` int(11) NOT NULL,
  `day_name` varchar(100) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_speciality`
--

CREATE TABLE `doctor_speciality` (
  `doctor_id` int(11) NOT NULL,
  `speciality_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medical_types`
--

CREATE TABLE `medical_types` (
  `medical_id` int(11) NOT NULL,
  `medical_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medical_types`
--

INSERT INTO `medical_types` (`medical_id`, `medical_type`) VALUES
(1, 'Major Diseases'),
(2, 'Surgeries'),
(3, 'Allergies'),
(4, 'Medication');

-- --------------------------------------------------------

--
-- Table structure for table `otp_auth`
--

CREATE TABLE `otp_auth` (
  `user_id` int(11) NOT NULL,
  `otp_code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patient_comment`
--

CREATE TABLE `patient_comment` (
  `appointment_id` int(11) NOT NULL,
  `comment_data` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patient_medical_history`
--

CREATE TABLE `patient_medical_history` (
  `patient_id` int(11) NOT NULL,
  `medical_type_id` int(11) NOT NULL,
  `data` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patient_rating`
--

CREATE TABLE `patient_rating` (
  `appointment_id` int(11) NOT NULL,
  `rating` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_type` int(11) NOT NULL,
  `full_name` varchar(250) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `address` varchar(250) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `dob` varchar(100) NOT NULL,
  `ver_status` varchar(100) NOT NULL DEFAULT 'unverified'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_type`, `full_name`, `phone`, `password`, `address`, `gender`, `dob`, `ver_status`) VALUES
(1, 1, 'Hunzlah Malik', '923076288887', '50a3c64362c0ba4a1c63e8d298fe2bba', 'abcd', 'other', '3/26/2022', 'unverified');

-- --------------------------------------------------------

--
-- Table structure for table `user_types`
--

CREATE TABLE `user_types` (
  `type_id` int(11) NOT NULL,
  `type_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_types`
--

INSERT INTO `user_types` (`type_id`, `type_name`) VALUES
(1, 'patient'),
(2, 'doctor');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_types`
--
ALTER TABLE `contact_types`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `doctor_appointment`
--
ALTER TABLE `doctor_appointment`
  ADD PRIMARY KEY (`appointment_id`),
  ADD KEY `doctor_appointment_constraint_doctor_id` (`doctor_id`),
  ADD KEY `doctor_appointment_constraint_patient_id` (`patient_id`);

--
-- Indexes for table `doctor_clinics`
--
ALTER TABLE `doctor_clinics`
  ADD KEY `doctor_clinics_constraint_doctor_id` (`doctor_id`);

--
-- Indexes for table `doctor_contact`
--
ALTER TABLE `doctor_contact`
  ADD KEY `doctor_contact_constraint_doctor_id` (`doctor_id`),
  ADD KEY `doctor_contact_constraint_contact_id` (`contact_id`);

--
-- Indexes for table `doctor_schedule`
--
ALTER TABLE `doctor_schedule`
  ADD KEY `doctor_schedule_constraint_doctor_id` (`doctor_id`);

--
-- Indexes for table `doctor_speciality`
--
ALTER TABLE `doctor_speciality`
  ADD KEY `doctor_speciality_constraint_doctor_id` (`doctor_id`);

--
-- Indexes for table `medical_types`
--
ALTER TABLE `medical_types`
  ADD PRIMARY KEY (`medical_id`);

--
-- Indexes for table `otp_auth`
--
ALTER TABLE `otp_auth`
  ADD KEY `otp_auth_constraint_user_id` (`user_id`);

--
-- Indexes for table `patient_comment`
--
ALTER TABLE `patient_comment`
  ADD KEY `patient_comment_constraint_appointment_id` (`appointment_id`);

--
-- Indexes for table `patient_medical_history`
--
ALTER TABLE `patient_medical_history`
  ADD KEY `patient_medical_history_constraint_patient_id` (`patient_id`),
  ADD KEY `patient_medical_history_constraint_medical_id` (`medical_type_id`);

--
-- Indexes for table `patient_rating`
--
ALTER TABLE `patient_rating`
  ADD KEY `patient_rating_constraint_appointment_id` (`appointment_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD KEY `users_constraint_user_type` (`user_type`);

--
-- Indexes for table `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_types`
--
ALTER TABLE `contact_types`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `doctor_appointment`
--
ALTER TABLE `doctor_appointment`
  MODIFY `appointment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medical_types`
--
ALTER TABLE `medical_types`
  MODIFY `medical_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_types`
--
ALTER TABLE `user_types`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `doctor_appointment`
--
ALTER TABLE `doctor_appointment`
  ADD CONSTRAINT `doctor_appointment_constraint_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `doctor_appointment_constraint_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctor_clinics`
--
ALTER TABLE `doctor_clinics`
  ADD CONSTRAINT `doctor_clinics_constraint_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctor_contact`
--
ALTER TABLE `doctor_contact`
  ADD CONSTRAINT `doctor_contact_constraint_contact_id` FOREIGN KEY (`contact_id`) REFERENCES `contact_types` (`contact_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `doctor_contact_constraint_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctor_schedule`
--
ALTER TABLE `doctor_schedule`
  ADD CONSTRAINT `doctor_schedule_constraint_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `doctor_speciality`
--
ALTER TABLE `doctor_speciality`
  ADD CONSTRAINT `doctor_speciality_constraint_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `otp_auth`
--
ALTER TABLE `otp_auth`
  ADD CONSTRAINT `otp_auth_constraint_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `patient_comment`
--
ALTER TABLE `patient_comment`
  ADD CONSTRAINT `patient_comment_constraint_appointment_id` FOREIGN KEY (`appointment_id`) REFERENCES `doctor_appointment` (`appointment_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_medical_history`
--
ALTER TABLE `patient_medical_history`
  ADD CONSTRAINT `patient_medical_history_constraint_medical_id` FOREIGN KEY (`medical_type_id`) REFERENCES `medical_types` (`medical_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient_medical_history_constraint_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_rating`
--
ALTER TABLE `patient_rating`
  ADD CONSTRAINT `patient_rating_constraint_appointment_id` FOREIGN KEY (`appointment_id`) REFERENCES `doctor_appointment` (`appointment_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_constraint_user_type` FOREIGN KEY (`user_type`) REFERENCES `user_types` (`type_id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
