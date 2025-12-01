import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Pages.css';

const DepositPage = () => {
  const { type } = useParams();
  const { t } = useLanguage();

  const deposits = {
    'saving-deposit': {
      title: 'Saving Deposit',
      icon: '🏦',
      description: 'A Savings Account is an interest-bearing deposit account that provides a modest interest rate.',
      features: [
        'Flexible withdrawal options',
        'Competitive interest rates',
        'No minimum balance requirement',
        'ATM card facility available',
        'Monthly interest credits'
      ],
      interestRate: '3.5% - 4% p.a.',
      minDeposit: '₹500'
    },
    'current-deposit': {
      title: 'Current Deposit',
      icon: '💼',
      description: 'We help you to grow faster in your business world with our current deposit account.',
      features: [
        'Unlimited transactions',
        'Overdraft facility',
        'Cheque book facility',
        'Internet banking',
        'Business-friendly features'
      ],
      interestRate: 'N/A',
      minDeposit: '₹5,000'
    },
    'daily-deposit': {
      title: 'Daily Deposit',
      icon: '📅',
      description: 'Daily collection Deposit Scheme that develops the saving habit.',
      features: [
        'Daily collection from doorstep',
        'Flexible deposit amounts',
        'Attractive interest rates',
        'Loan facility against deposit',
        'Easy withdrawal'
      ],
      interestRate: '7% - 8% p.a.',
      minDeposit: '₹50 per day'
    },
    'balkalyan-deposit': {
      title: 'Balkalyan Deposit',
      icon: '👶',
      description: 'Start saving for your child\'s higher education and be ready for their bright future.',
      features: [
        'Long-term savings plan',
        'Higher interest rates',
        'Tax benefits available',
        'Partial withdrawal allowed',
        'Education loan linkage'
      ],
      interestRate: '8% - 9% p.a.',
      minDeposit: '₹1,000'
    },
    'recurring-deposit': {
      title: 'Recurring Deposit',
      icon: '🔄',
      description: 'Best if you wish to create a fund for your future financial goals.',
      features: [
        'Fixed monthly deposits',
        'Flexible tenure (6 months to 10 years)',
        'Higher than savings account interest',
        'Loan facility available',
        'Auto-debit facility'
      ],
      interestRate: '6.5% - 7.5% p.a.',
      minDeposit: '₹500 per month'
    },
    'lakhpati-deposit': {
      title: 'Lakhpati Deposit',
      icon: '💰',
      description: 'Invest in this scheme and become a Lakhpati. Scheme is for all age groups.',
      features: [
        'Guaranteed returns',
        'Systematic savings approach',
        'Achieve ₹1 Lakh target',
        'Flexible payment options',
        'Attractive interest rates'
      ],
      interestRate: '7.5% - 8.5% p.a.',
      minDeposit: '₹1,000'
    },
    'term-deposit': {
      title: 'Term Deposit / Fixed Deposit',
      icon: '📊',
      description: 'Term deposits are an extremely safe investment and therefore very appealing to conservative investors.',
      features: [
        'Fixed interest rates',
        'Multiple tenure options',
        'High returns on investment',
        'Premature withdrawal allowed',
        'Senior citizen benefits'
      ],
      interestRate: '6% - 9% p.a.',
      minDeposit: '₹10,000'
    },
    'mis-deposit': {
      title: 'MIS Deposit (Monthly Income Scheme)',
      icon: '📈',
      description: 'In Monthly Income Scheme Deposit, we provide regular monthly income for your expenses.',
      features: [
        'Regular monthly income',
        'Fixed interest payout',
        'Ideal for retirees',
        'Safe and secure',
        'Guaranteed returns'
      ],
      interestRate: '7% - 8% p.a.',
      minDeposit: '₹25,000'
    },
    'shiv-sankalp-deposit': {
      title: 'Shiv Sankalp Deposit',
      icon: '💎',
      description: 'Account holders can make transactions in their accounts more easily than regular accounts.',
      features: [
        'Enhanced transaction facility',
        'Better interest rates',
        'Personalized service',
        'Priority banking',
        'Digital banking enabled'
      ],
      interestRate: '8% - 9% p.a.',
      minDeposit: '₹5,000'
    },
    'double-deposit': {
      title: 'Double Deposit',
      icon: '✖️2',
      description: 'Keep a certain amount for a specific period which gets doubled at maturity.',
      features: [
        'Double your money',
        'Fixed tenure scheme',
        'Guaranteed returns',
        'Safe investment',
        'Tax benefits'
      ],
      interestRate: 'Amount doubles in 8-10 years',
      minDeposit: '₹10,000'
    }
  };

  const depositInfo = type ? deposits[type] : null;

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>{depositInfo ? depositInfo.title : 'Deposit Schemes'}</h1>
          <p>Invest in your future with our various deposit schemes</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          {depositInfo ? (
            <div className="product-detail">
              <div className="product-hero">
                <div className="product-icon-large">{depositInfo.icon}</div>
                <div className="product-intro">
                  <h2>{depositInfo.title}</h2>
                  <p className="product-description">{depositInfo.description}</p>
                </div>
              </div>

              <div className="product-info-grid">
                <div className="info-box">
                  <h4>Interest Rate</h4>
                  <p className="highlight">{depositInfo.interestRate}</p>
                </div>
                <div className="info-box">
                  <h4>Minimum Deposit</h4>
                  <p className="highlight">{depositInfo.minDeposit}</p>
                </div>
              </div>

              <div className="features-section">
                <h3>Key Features & Benefits</h3>
                <ul className="features-list">
                  {depositInfo.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cta-section">
                <h3>Ready to Start?</h3>
                <p>Open your {depositInfo.title} account today and secure your financial future.</p>
                <div className="cta-buttons">
                  <a href="/apply" className="cta-btn primary">Open Account</a>
                  <a href="/contact" className="cta-btn secondary">Contact Us</a>
                </div>
              </div>
            </div>
          ) : (
            <div className="products-grid">
              {Object.entries(deposits).map(([key, deposit]) => (
                <a key={key} href={`/deposit/${key}`} className="product-card">
                  <div className="product-icon">{deposit.icon}</div>
                  <h3>{deposit.title}</h3>
                  <p>{deposit.description}</p>
                  <div className="product-meta">
                    <span className="interest-badge">{deposit.interestRate}</span>
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

export default DepositPage;
