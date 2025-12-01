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
              <span>📞 +91 22 35008395 / +91 22 35136888</span>
              <span>✉️ info@shivsahyadripatpedhi.com</span>
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
              <ul>
                <li><Link to="/">{t('home')}</Link></li>
                <li className={`dropdown ${activeDropdown === 'about' ? 'mobile-active' : ''}`}>
                  <Link to="/about" onClick={(e) => {
                    if (window.innerWidth <= 968) {
                      e.preventDefault();
                      toggleMobileDropdown('about');
                    }
                  }}>{t('about')} ▾</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/about">Profile</Link></li>
                    <li><Link to="/about#history">History</Link></li>
                    <li><Link to="/about#vision-mission">Vision & Mission</Link></li>
                    <li><Link to="/awards-achievements">Awards & Achievements</Link></li>
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
                    <li><Link to="/deposit/saving-deposit">Saving Deposit</Link></li>
                    <li><Link to="/deposit/current-deposit">Current Deposit</Link></li>
                    <li><Link to="/deposit/daily-deposit">Daily Deposit</Link></li>
                    <li><Link to="/deposit/balkalyan-deposit">Balkalyan Deposit</Link></li>
                    <li><Link to="/deposit/recurring-deposit">Recurring Deposit</Link></li>
                    <li><Link to="/deposit/lakhpati-deposit">Lakhpati Deposit</Link></li>
                    <li><Link to="/deposit/term-deposit">Term Deposit</Link></li>
                    <li><Link to="/deposit/mis-deposit">MIS Deposit</Link></li>
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
                    <li><Link to="/loan/vehicle-loan">Vehicle Loan</Link></li>
                    <li><Link to="/loan/gold-loan">Gold Loan</Link></li>
                    <li><Link to="/loan/machinery-loan">Machinery Loan</Link></li>
                    <li><Link to="/loan/property-mortgage-loan">Property Mortgage Loan</Link></li>
                    <li><Link to="/loan/personal-loan-emi">Personal Loan</Link></li>
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
                    <li><Link to="/services/locker">Locker</Link></li>
                    <li><Link to="/services/micro-atm">Micro ATM</Link></li>
                    <li><Link to="/services/core-banking">Core Banking</Link></li>
                    <li><Link to="/services/sms-banking">SMS Banking</Link></li>
                    <li><Link to="/mobile-banking-app">Mobile Banking App</Link></li>
                  </ul>
                </li>
                <li><Link to="/locations">{t('locations')}</Link></li>
                <li><Link to="/contact">{t('contact')}</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
