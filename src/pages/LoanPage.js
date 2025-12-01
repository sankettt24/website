import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Pages.css';

const LoanPage = () => {
  const { type } = useParams();
  const { t } = useLanguage();

  const loans = {
    'vehicle-loan': {
      title: 'Vehicle Loan',
      icon: '🚗',
      description: 'Get your dream vehicle with our affordable vehicle loan schemes for two-wheelers and four-wheelers.',
      features: [
        'Up to 90% financing',
        'Competitive interest rates',
        'Flexible repayment tenure',
        'Quick processing',
        'Minimal documentation'
      ],
      interestRate: '9% - 12% p.a.',
      maxLoan: 'Up to ₹10 Lakhs'
    },
    'gold-loan': {
      title: 'Gold Loan',
      icon: '🏅',
      description: 'Instant cash against your gold ornaments with minimal documentation and hassle-free process.',
      features: [
        'Instant approval',
        'Up to 75% of gold value',
        'Secure gold storage',
        'Flexible repayment',
        'No hidden charges'
      ],
      interestRate: '8% - 11% p.a.',
      maxLoan: 'Based on gold value'
    },
    'machinery-loan': {
      title: 'Machinery Loan',
      icon: '⚙️',
      description: 'Finance your business machinery and equipment to expand your business operations.',
      features: [
        'Finance for new/used machinery',
        'Long repayment tenure',
        'Attractive interest rates',
        'Quick disbursal',
        'Business growth support'
      ],
      interestRate: '10% - 14% p.a.',
      maxLoan: 'Up to ₹50 Lakhs'
    },
    'property-mortgage-loan': {
      title: 'Property Mortgage Loan',
      icon: '🏠',
      description: 'Ultimate flexibility to make your dream home come true with our property mortgage loan.',
      features: [
        'High loan amount',
        'Long repayment period',
        'Competitive rates',
        'Loan against residential/commercial property',
        'No end-use restriction'
      ],
      interestRate: '9% - 13% p.a.',
      maxLoan: 'Up to ₹1 Crore'
    },
    'personal-loan-emi': {
      title: 'Personal Loan',
      icon: '💳',
      description: 'Meet your personal financial needs with our quick and easy personal loan schemes.',
      features: [
        'Minimal documentation',
        'Quick approval process',
        'No collateral required',
        'Flexible EMI options',
        'Multiple end-use purposes'
      ],
      interestRate: '11% - 16% p.a.',
      maxLoan: 'Up to ₹5 Lakhs'
    },
    'loan-against-daily-deposit': {
      title: 'Loan Against Daily Deposit',
      icon: '📅',
      description: 'Get instant loan against your daily deposit account at attractive interest rates.',
      features: [
        'Up to 90% of deposit value',
        'No foreclosure charges',
        'Continue earning interest on deposit',
        'Quick processing',
        'Flexible repayment'
      ],
      interestRate: '2% above deposit rate',
      maxLoan: '90% of deposit'
    },
    'loan-against-rd-deposit': {
      title: 'Loan Against RD Deposit',
      icon: '🔄',
      description: 'Avail loan against your recurring deposit without breaking your savings plan.',
      features: [
        'Up to 85% of RD value',
        'Keep your RD active',
        'Lower interest rates',
        'Easy application process',
        'No penalty charges'
      ],
      interestRate: '2% above RD rate',
      maxLoan: '85% of RD value'
    },
    'stock-mortgage-loan': {
      title: 'Stock Mortgage Loan',
      icon: '📦',
      description: 'Finance your business working capital by mortgaging your stock and inventory.',
      features: [
        'Working capital support',
        'Competitive interest rates',
        'Flexible repayment',
        'Business expansion support',
        'Quick approval'
      ],
      interestRate: '11% - 15% p.a.',
      maxLoan: 'Up to ₹25 Lakhs'
    }
  };

  const loanInfo = type ? loans[type] : null;

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>{loanInfo ? loanInfo.title : 'Loan Schemes'}</h1>
          <p>Achieve your goals with our flexible loan options</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          {loanInfo ? (
            <div className="product-detail">
              <div className="product-hero">
                <div className="product-icon-large">{loanInfo.icon}</div>
                <div className="product-intro">
                  <h2>{loanInfo.title}</h2>
                  <p className="product-description">{loanInfo.description}</p>
                </div>
              </div>

              <div className="product-info-grid">
                <div className="info-box">
                  <h4>Interest Rate</h4>
                  <p className="highlight">{loanInfo.interestRate}</p>
                </div>
                <div className="info-box">
                  <h4>Maximum Loan Amount</h4>
                  <p className="highlight">{loanInfo.maxLoan}</p>
                </div>
              </div>

              <div className="features-section">
                <h3>Key Features & Benefits</h3>
                <ul className="features-list">
                  {loanInfo.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="eligibility-section">
                <h3>Eligibility Criteria</h3>
                <div className="eligibility-grid">
                  <div className="eligibility-card">
                    <div className="eligibility-icon">👤</div>
                    <h4>Age</h4>
                    <p>21 to 65 years</p>
                  </div>
                  <div className="eligibility-card">
                    <div className="eligibility-icon">💼</div>
                    <h4>Employment</h4>
                    <p>Salaried or Self-employed</p>
                  </div>
                  <div className="eligibility-card">
                    <div className="eligibility-icon">💰</div>
                    <h4>Income</h4>
                    <p>Minimum ₹15,000/month</p>
                  </div>
                  <div className="eligibility-card">
                    <div className="eligibility-icon">📄</div>
                    <h4>Documents</h4>
                    <p>ID, Address & Income Proof</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <h3>Ready to Apply?</h3>
                <p>Get your {loanInfo.title} approved quickly with minimal documentation.</p>
                <div className="cta-buttons">
                  <a href="/apply" className="cta-btn primary">Apply Now</a>
                  <a href="/contact" className="cta-btn secondary">Talk to Expert</a>
                </div>
              </div>
            </div>
          ) : (
            <div className="products-grid">
              {Object.entries(loans).map(([key, loan]) => (
                <a key={key} href={`/loan/${key}`} className="product-card">
                  <div className="product-icon">{loan.icon}</div>
                  <h3>{loan.title}</h3>
                  <p>{loan.description}</p>
                  <div className="product-meta">
                    <span className="interest-badge">{loan.interestRate}</span>
                  </div>
                  <span className="learn-more-arrow">Learn More →</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanPage;
