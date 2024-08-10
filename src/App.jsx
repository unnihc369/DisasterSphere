import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Grid from './components/Grid';
import Profile from './components/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import GridBuilder from './components/GridBuilder';
import { Provider, useSelector } from 'react-redux';
import VerifyEmail from './pages/VerifyEmail';
import Admin from './pages/Admin';

function App() {
  const user = useSelector((state) => state.user.user);
  const isAdmin = useSelector((state) => state.user.isAdmin);

  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="/grid" element={isAdmin ? <Grid /> : <Navigate to="/login" replace />}/>
          <Route path="/admin" element={isAdmin ? <Admin /> : <Navigate to="/login" replace />} />
          <Route path="/gridbuilder" element={<GridBuilder />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/" element={<AboutUs />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
