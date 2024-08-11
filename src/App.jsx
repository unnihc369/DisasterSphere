import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Provider, useSelector } from 'react-redux';
import VerifyEmail from './pages/VerifyEmail';
import Admin from './pages/Admin';
import AddDisaster from './pages/AddDisaster';
import NonVerifiedDisasters from './components/NonVerifiedDisasters';
import DisasterDetail from './components/DisasterDetail';
import VerifiedDisasters from './components/VerifiedDisasters';
import DisasterView from './components/DisasterView.jsx';
import Earthquake from './components/Earthquake.jsx';
import Flood from './components/Flood.jsx';
import Cyclone from './components/Cyclone.jsx';
import Wildfire from './components/Wildfire.jsx';
import Tsunami from './components/Tsunami.jsx';
import Landslide from './components/Landslide.jsx';
import EducationAndLearning from './components/EducationAndLearning.jsx';
import {Helmet} from 'react-helmet'

function App() {
  const user = useSelector((state) => state.user.user);
  const isAdmin = useSelector((state) => state.user.isAdmin);

  return (
    <Router>
      <div className="">
        <Helmet>
          <title>DisasterSphere</title>
          <meta name="description" content="DisasterSphere is a platform for disaster preparedness and response. Get real-time alerts, educational resources, and manage volunteer efforts to help during disasters." />
          <meta name="keywords" content="disaster preparedness, disaster response, earthquake, flood, cyclone, wildfire, tsunami, landslide, emergency management" />
          <meta property="og:title" content="DisasterSphere - Disaster Preparedness and Response Platform" />
          <meta property="og:description" content="Join DisasterSphere to stay informed about disasters, learn how to prepare, and get involved in volunteer efforts." />
          <meta property="og:image" content="https://example.com/path-to-your-image.jpg" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="DisasterSphere - Disaster Preparedness and Response Platform" />
          <meta name="twitter:description" content="Join DisasterSphere to stay informed about disasters, learn how to prepare, and get involved in volunteer efforts." />
          <meta name="twitter:image" content="https://example.com/path-to-your-image.jpg" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="/adddisaster" element={user ? <AddDisaster /> : <Navigate to="/login" replace />} />
          <Route path="/admin" element={isAdmin ? <Admin /> : <Navigate to="/login" replace />} />
          <Route path="/dis" element={user ? <VerifiedDisasters /> : <Navigate to="/login" replace />} />
          <Route path="/" element={<AboutUs />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nondis" element={<NonVerifiedDisasters />} />
          <Route path="/disaster/:id" element={<DisasterDetail />} />
          <Route path="/disasterview" element={<DisasterView />} />
          <Route path="/earthquake" element={<Earthquake />} />
          <Route path="/flood" element={<Flood />} />
          <Route path="/cyclone" element={<Cyclone />} />
          <Route path="/wildfire" element={<Wildfire />} />
          <Route path="/tsunami" element={<Tsunami />} />
          <Route path="/landslide" element={<Landslide />} />
          <Route path="/edu" element={<EducationAndLearning />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;