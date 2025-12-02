import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMobileDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span className="contact-item">📞 +91 22 35008395 / +91 22 35136888</span>
              <span className="contact-item">✉️ info@shivsahyadripatpedhi.com</span>
            </div>
            <div className="language-switch">
              <button onClick={toggleLanguage} className="lang-btn">
                {language === 'en' ? t('switchToMarathi') : t('switchToEnglish')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link to="/">
                <h1>Shiv Sahyadri Patpedhi</h1>
                <p>Sahakari Patpedhi Maryadit Mumbai</p>
              </Link>
            </div>

            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>

            <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <button 
                className="mobile-menu-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
              <ul>
                <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>{t('home')}</Link></li>
                <li className={`dropdown ${activeDropdown === 'about' ? 'mobile-active' : ''}`}>
                  <Link to="/about" onClick={(e) => {
                    if (window.innerWidth <= 968) {
                      e.preventDefault();
                      toggleMobileDropdown('about');
                    }
                  }}>{t('about')} ▾</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>Profile</Link></li>
                    <li><Link to="/about#history" onClick={() => setMobileMenuOpen(false)}>History</Link></li>
                    <li><Link to="/about#vision-mission" onClick={() => setMobileMenuOpen(false)}>Vision & Mission</Link></li>
                    <li><Link to="/awards-achievements" onClick={() => setMobileMenuOpen(false)}>Awards & Achievements</Link></li>
                  </ul>
                </li>
                <li className={`dropdown ${activeDropdown === 'deposit' ? 'mobile-active' : ''}`}>
                  <Link to="/deposit" onClick={(e) => {
                    if (window.innerWidth <= 968) {
                      e.preventDefault();
                      toggleMobileDropdown('deposit');
                    }
                  }}>{t('deposit')} ▾</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/deposit/saving-deposit" onClick={() => setMobileMenuOpen(false)}>Saving Deposit</Link></li>
                    <li><Link to="/deposit/current-deposit" onClick={() => setMobileMenuOpen(false)}>Current Deposit</Link></li>
                    <li><Link to="/deposit/daily-deposit" onClick={() => setMobileMenuOpen(false)}>Daily Deposit</Link></li>
                    <li><Link to="/deposit/balkalyan-deposit" onClick={() => setMobileMenuOpen(false)}>Balkalyan Deposit</Link></li>
                    <li><Link to="/deposit/recurring-deposit" onClick={() => setMobileMenuOpen(false)}>Recurring Deposit</Link></li>
                    <li><Link to="/deposit/lakhpati-deposit" onClick={() => setMobileMenuOpen(false)}>Lakhpati Deposit</Link></li>
                    <li><Link to="/deposit/term-deposit" onClick={() => setMobileMenuOpen(false)}>Term Deposit</Link></li>
                    <li><Link to="/deposit/mis-deposit" onClick={() => setMobileMenuOpen(false)}>MIS Deposit</Link></li>
                  </ul>
                </li>
                <li className={`dropdown ${activeDropdown === 'loan' ? 'mobile-active' : ''}`}>
                  <Link to="/loan" onClick={(e) => {
                    if (window.innerWidth <= 968) {
                      e.preventDefault();
                      toggleMobileDropdown('loan');
                    }
                  }}>{t('loans')} ▾</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/loan/vehicle-loan" onClick={() => setMobileMenuOpen(false)}>Vehicle Loan</Link></li>
                    <li><Link to="/loan/gold-loan" onClick={() => setMobileMenuOpen(false)}>Gold Loan</Link></li>
                    <li><Link to="/loan/machinery-loan" onClick={() => setMobileMenuOpen(false)}>Machinery Loan</Link></li>
                    <li><Link to="/loan/property-mortgage-loan" onClick={() => setMobileMenuOpen(false)}>Property Mortgage Loan</Link></li>
                    <li><Link to="/loan/personal-loan-emi" onClick={() => setMobileMenuOpen(false)}>Personal Loan</Link></li>
                  </ul>
                </li>
                <li className={`dropdown ${activeDropdown === 'services' ? 'mobile-active' : ''}`}>
                  <Link to="/services" onClick={(e) => {
                    if (window.innerWidth <= 968) {
                      e.preventDefault();
                      toggleMobileDropdown('services');
                    }
                  }}>{t('services')} ▾</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/services/locker" onClick={() => setMobileMenuOpen(false)}>Locker</Link></li>
                    <li><Link to="/services/micro-atm" onClick={() => setMobileMenuOpen(false)}>Micro ATM</Link></li>
                    <li><Link to="/services/core-banking" onClick={() => setMobileMenuOpen(false)}>Core Banking</Link></li>
                    <li><Link to="/services/sms-banking" onClick={() => setMobileMenuOpen(false)}>SMS Banking</Link></li>
                    <li><Link to="/mobile-banking-app" onClick={() => setMobileMenuOpen(false)}>Mobile Banking App</Link></li>
                  </ul>
                </li>
                <li><Link to="/locations" onClick={() => setMobileMenuOpen(false)}>{t('locations')}</Link></li>
                <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>{t('contact')}</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
