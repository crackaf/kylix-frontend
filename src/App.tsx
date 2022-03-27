import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Signup from 'pages/signup';
import Login from 'pages/login';
import Auth from 'pages/auth';
import Doctors from 'pages/doctors';
import Profile from 'pages/profile';
import Appointments from 'pages/appointments';
import AppointmentDetails from 'pages/appointment_details';
import DoctorProfile from 'pages/doctor_profile';

/**
 *
 * @return {JSX.Element}
 */
function App() {
  return (
    <div>
      <Helmet>
        <title>Kylix</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor_Profile" element={<DoctorProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointment_details" element={<AppointmentDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
