import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './DepositSection.css';

const DepositSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('deposit');
  
  const deposits = [
    {
      titleKey: "shivSankalpDeposit",
      descKey: "shivSankalpDesc",
      link: "/deposit/shiv-sankalp-deposit",
      image: "💎"
    },
    {
      titleKey: "savingDeposit",
      descKey: "savingDepositDesc",
      link: "/deposit/saving-deposit",
      image: "🏦"
    },
    {
      titleKey: "currentDeposit",
      descKey: "currentDepositDesc",
      link: "/deposit/current-deposit",
      image: "💼"
    },
    {
      titleKey: "dailyDeposit",
      descKey: "dailyDepositDesc",
      link: "/deposit/daily-deposit",
      image: "📅"
    },
    {
      titleKey: "balkalyanDeposit",
      descKey: "balkalyanDepositDesc",
      link: "/deposit/balkalyan-deposit",
      image: "👶"
    },
    {
      titleKey: "recurringDeposit",
      descKey: "recurringDepositDesc",
      link: "/deposit/recurring-deposit",
      image: "🔄"
    },
    {
      titleKey: "lakhpatiDeposit",
      descKey: "lakhpatiDepositDesc",
      link: "/deposit/lakhpati-deposit",
      image: "💰"
    },
    {
      titleKey: "termDeposit",
      descKey: "termDepositDesc",
      link: "/deposit/term-deposit",
      image: "📊"
    },
    {
      titleKey: "misDeposit",
      descKey: "misDepositDesc",
      link: "/deposit/mis-deposit",
      image: "📈"
    },
    {
      titleKey: "doubleDeposit",
      descKey: "doubleDepositDesc",
      link: "/deposit/double-deposit1",
      image: "✖️2"
    }
  ];

  const loans = [
    {
      titleKey: "personalLoan",
      descKey: "personalLoanDesc",
      link: "/loan/personal-loan-emi",
      image: "👤"
    },
    {
      titleKey: "vehicleLoan",
      descKey: "vehicleLoanDesc",
      link: "/loan/vehicle-loan",
      image: "🚗"
    },
    {
      titleKey: "goldLoan",
      descKey: "goldLoanDesc",
      link: "/loan/gold-loan",
      image: "🪙"
    },
    {
      titleKey: "propertyLoan",
      descKey: "propertyLoanDesc",
      link: "/loan/property-mortgage-loan-emi",
      image: "🏠"
    },
    {
      titleKey: "machineryLoan",
      descKey: "machineryLoanDesc",
      link: "/loan/machinery-loan",
      image: "⚙️"
    },
    {
      titleKey: "loanAgainstDeposit",
      descKey: "loanAgainstDepositDesc",
      link: "/loan/loan-against-daily-deposit",
      image: "💳"
    }
  ];

  const currentItems = activeTab === 'deposit' ? deposits : loans;

  return (
    <section className="deposit-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('investInFuture')}</h2>
          <p className="section-subtitle">Choose from our wide range of financial products</p>
        </div>
        
        <div className="tabs-container">
          <button 
            className={`tab ${activeTab === 'deposit' ? 'active' : ''}`}
            onClick={() => setActiveTab('deposit')}
          >
            {t('depositTab')}
          </button>
          <button 
            className={`tab ${activeTab === 'loans' ? 'active' : ''}`}
            onClick={() => setActiveTab('loans')}
          >
            {t('loansTab')}
          </button>
        </div>
        
        <div className="products-grid">
          {currentItems.map((item, index) => (
            <a href={item.link} key={index} className="product-card">
              <div className="product-image">{item.image}</div>
              <div className="product-content">
                <h3>{t(item.titleKey)}</h3>
                <p>{t(item.descKey)}</p>
                <span className="arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepositSection;
