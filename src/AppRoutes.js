import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import DepositPage from './pages/DepositPage';
import LoanPage from './pages/LoanPage';
import ServicesPage from './pages/ServicesPage';
import './App.css';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/deposit" element={<DepositPage />} />
      <Route path="/deposit/:type" element={<DepositPage />} />
      <Route path="/loan" element={<LoanPage />} />
      <Route path="/loan/:type" element={<LoanPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:type" element={<ServicesPage />} />
      <Route path="/mobile-banking-app" element={<ServicesPage />} />
      <Route path="/awards-achievements" element={<About />} />
      <Route path="/career" element={<Contact />} />
      <Route path="/apply" element={<Contact />} />
      <Route path="/feedback" element={<Contact />} />
      <Route path="/customer-support" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
