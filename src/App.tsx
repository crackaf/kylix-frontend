import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Signup from 'pages/signup';
import Login from 'pages/login';
import Auth from 'pages/auth';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
