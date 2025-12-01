import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import DepositPage from './pages/DepositPage';
import LoanPage from './pages/LoanPage';
import ServicesPage from './pages/ServicesPage';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
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
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
