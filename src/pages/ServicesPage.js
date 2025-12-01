import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Pages.css';

const ServicesPage = () => {
  const { type } = useParams();
  const { t } = useLanguage();

  const services = {
    'locker': {
      title: 'Locker Facility',
      icon: '🔐',
      description: 'Keep your valuables safe and secure with our state-of-the-art locker facilities.',
      features: [
        'High-security vault',
        '24/7 surveillance',
        'Various locker sizes available',
        'Insurance coverage',
        'Easy access during banking hours',
        'Affordable annual charges'
      ],
      charges: 'Starting from ₹1,000 per year'
    },
    'micro-atm': {
      title: 'Micro ATM',
      icon: '🏧',
      description: 'Upgrade your business with Micro ATM and do cashless recharges & bill payments.',
      features: [
        'Cash withdrawal facility',
        'Balance inquiry',
        'Mini statement',
        'Bill payments',
        'Mobile recharges',
        'Aadhar-based transactions'
      ],
      charges: 'Contact branch for details'
    },
    'core-banking': {
      title: 'Core Banking',
      icon: '🖥️',
      description: 'Access your account from any of our branches with our core banking solution.',
      features: [
        'Any branch banking',
        'Real-time transactions',
        'Account consolidation',
        'Instant fund transfer',
        'Online statement',
        'Secure and reliable'
      ],
      charges: 'Free for all accounts'
    },
    'sms-banking': {
      title: 'SMS Banking',
      icon: '📱',
      description: 'Get instant updates on your account transactions via SMS alerts.',
      features: [
        'Transaction alerts',
        'Balance inquiry via SMS',
        'Account statement alerts',
        'Cheque status updates',
        'FD/RD maturity reminders',
        'Loan EMI reminders'
      ],
      charges: 'Nominal SMS charges apply'
    },
    'mobile-banking-app': {
      title: 'Mobile Banking App',
      icon: '📲',
      description: 'The official banking app of Shivsahyadri Sahakari Patpedhi Maryadit Mumbai.',
      features: [
        'Check account balance',
        'View transaction history',
        'Fund transfer',
        'Bill payments',
        'Mobile recharges',
        'Loan status tracking',
        'Branch locator',
        'Customer support'
      ],
      charges: 'Free to download and use'
    },
    'fund-transfer': {
      title: 'Fund Transfer',
      icon: '💸',
      description: 'Transfer funds instantly to any bank account across India.',
      features: [
        'NEFT transfers',
        'RTGS transfers',
        'IMPS - instant transfers',
        'Inter-branch transfers',
        'Beneficiary management',
        'Scheduled transfers'
      ],
      charges: 'As per RBI guidelines'
    },
    'money-transfer': {
      title: 'Money Transfer',
      icon: '💵',
      description: 'Send and receive money quickly and securely through our money transfer services.',
      features: [
        'Quick processing',
        'Wide network coverage',
        'Competitive exchange rates',
        'Safe and secure',
        'Doorstep service available',
        'International remittance'
      ],
      charges: 'Based on transfer amount'
    }
  };

  const serviceInfo = type ? services[type] : services['mobile-banking-app'];
  const showAll = !type && window.location.pathname === '/services';

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>{showAll ? 'Our Services' : serviceInfo.title}</h1>
          <p>{showAll ? 'Comprehensive banking services for all your needs' : 'Digital banking made easy'}</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          {showAll ? (
            <div className="products-grid">
              {Object.entries(services).map(([key, service]) => (
                <a key={key} href={`/services/${key}`} className="product-card">
                  <div className="product-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="learn-more-arrow">Learn More →</span>
                </a>
              ))}
            </div>
          ) : (
            <div className="product-detail">
              <div className="product-hero">
                <div className="product-icon-large">{serviceInfo.icon}</div>
                <div className="product-intro">
                  <h2>{serviceInfo.title}</h2>
                  <p className="product-description">{serviceInfo.description}</p>
                </div>
              </div>

              <div className="product-info-grid">
                <div className="info-box">
                  <h4>Service Charges</h4>
                  <p className="highlight">{serviceInfo.charges}</p>
                </div>
              </div>

              <div className="features-section">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {serviceInfo.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {(type === 'mobile-banking-app' || !type) && (
                <div className="app-download-section">
                  <h3>Download Our Mobile App</h3>
                  <p>Get banking at your fingertips. Download now!</p>
                  <div className="app-store-buttons">
                    <a href="https://play.google.com/store/apps/details?id=com.sil.shivsahyadri" target="_blank" rel="noopener noreferrer" className="app-store-btn">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                    </a>
                    <a href="https://apps.apple.com/in/app/shivsahyadri-mobile-banking/id6443654403" target="_blank" rel="noopener noreferrer" className="app-store-btn">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                    </a>
                  </div>
                </div>
              )}

              <div className="cta-section">
                <h3>Need More Information?</h3>
                <p>Our team is here to help you with all your banking needs.</p>
                <div className="cta-buttons">
                  <a href="/contact" className="cta-btn primary">Contact Us</a>
                  <a href="/locations" className="cta-btn secondary">Find Branch</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
