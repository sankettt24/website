import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './DepositSection.css';

const DepositSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('deposit');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const deposits = [
    {
      titleKey: "shivSankalpDeposit",
      descKey: "shivSankalpDesc",
      link: "/deposit/shiv-sankalp-deposit",
      image: "💎",
      rate: "7.5% - 8.5%",
      tenure: "1-10 years",
      features: ["High Returns", "Flexible Tenure", "Safe Investment"]
    },
    {
      titleKey: "savingDeposit",
      descKey: "savingDepositDesc",
      link: "/deposit/saving-deposit",
      image: "🏦",
      rate: "4% - 5%",
      tenure: "Ongoing",
      features: ["Daily Transactions", "No Lock-in", "Instant Access"]
    },
    {
      titleKey: "currentDeposit",
      descKey: "currentDepositDesc",
      link: "/deposit/current-deposit",
      image: "💼",
      rate: "0%",
      tenure: "Ongoing",
      features: ["Business Account", "Unlimited Transactions", "No Interest"]
    },
    {
      titleKey: "dailyDeposit",
      descKey: "dailyDepositDesc",
      link: "/deposit/daily-deposit",
      image: "📅",
      rate: "7% - 8%",
      tenure: "1-5 years",
      features: ["Daily Collection", "Small Savings", "Easy Deposits"]
    },
    {
      titleKey: "balkalyanDeposit",
      descKey: "balkalyanDepositDesc",
      link: "/deposit/balkalyan-deposit",
      image: "👶",
      rate: "8% - 9%",
      tenure: "5-15 years",
      features: ["Child's Future", "Tax Benefits", "Long Term"]
    },
    {
      titleKey: "recurringDeposit",
      descKey: "recurringDepositDesc",
      link: "/deposit/recurring-deposit",
      image: "🔄",
      rate: "7% - 8%",
      tenure: "1-5 years",
      features: ["Monthly Savings", "Fixed Returns", "Disciplined Saving"]
    },
    {
      titleKey: "lakhpatiDeposit",
      descKey: "lakhpatiDepositDesc",
      link: "/deposit/lakhpati-deposit",
      image: "💰",
      rate: "7.5% - 8.5%",
      tenure: "3-10 years",
      features: ["Become Lakhpati", "Goal Based", "Assured Returns"]
    },
    {
      titleKey: "termDeposit",
      descKey: "termDepositDesc",
      link: "/deposit/term-deposit",
      image: "📊",
      rate: "7% - 9%",
      tenure: "1-10 years",
      features: ["Fixed Returns", "Various Tenures", "Secure"]
    },
    {
      titleKey: "misDeposit",
      descKey: "misDepositDesc",
      link: "/deposit/mis-deposit",
      image: "📈",
      rate: "8% - 9%",
      tenure: "1-5 years",
      features: ["Monthly Income", "Regular Payout", "Retirement Plan"]
    },
    {
      titleKey: "doubleDeposit",
      descKey: "doubleDepositDesc",
      link: "/deposit/double-deposit1",
      image: "✖️2",
      rate: "7% - 8%",
      tenure: "8-10 years",
      features: ["Double Money", "Long Term", "Wealth Creation"]
    }
  ];

  const loans = [
    {
      titleKey: "personalLoan",
      descKey: "personalLoanDesc",
      link: "/loan/personal-loan-emi",
      image: "👤",
      rate: "12% - 18%",
      amount: "Up to ₹5 Lakh",
      features: ["Quick Approval", "Minimal Documentation", "Flexible Repayment"]
    },
    {
      titleKey: "vehicleLoan",
      descKey: "vehicleLoanDesc",
      link: "/loan/vehicle-loan",
      image: "🚗",
      rate: "10% - 14%",
      amount: "Up to 90% Value",
      features: ["New & Used", "Fast Processing", "Easy EMI"]
    },
    {
      titleKey: "goldLoan",
      descKey: "goldLoanDesc",
      link: "/loan/gold-loan",
      image: "🪙",
      rate: "8% - 12%",
      amount: "Up to 75% Value",
      features: ["Instant Approval", "Safe Storage", "Low Interest"]
    },
    {
      titleKey: "propertyLoan",
      descKey: "propertyLoanDesc",
      link: "/loan/property-mortgage-loan-emi",
      image: "🏠",
      rate: "10% - 15%",
      amount: "Up to ₹50 Lakh",
      features: ["Property Backed", "Higher Amount", "Long Tenure"]
    },
    {
      titleKey: "machineryLoan",
      descKey: "machineryLoanDesc",
      link: "/loan/machinery-loan",
      image: "⚙️",
      rate: "11% - 16%",
      amount: "Up to ₹25 Lakh",
      features: ["Business Growth", "New & Used", "Tax Benefits"]
    },
    {
      titleKey: "loanAgainstDeposit",
      descKey: "loanAgainstDepositDesc",
      link: "/loan/loan-against-daily-deposit",
      image: "💳",
      rate: "2% above FD",
      amount: "Up to 90% FD",
      features: ["Continue FD Benefits", "Quick Loan", "No Processing Fee"]
    }
  ];

  const allItems = activeTab === 'deposit' ? deposits : loans;
  const itemsToShow = 6;
  const currentItems = allItems.slice(currentIndex, currentIndex + itemsToShow);

  // Auto-scroll effect
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + itemsToShow;
        // If we've reached the end, reset to beginning
        if (nextIndex >= allItems.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(autoScrollInterval);
  }, [allItems.length, itemsToShow]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - itemsToShow));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(allItems.length - itemsToShow, prev + itemsToShow));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex + itemsToShow < allItems.length;

  return (
    <section className="deposit-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('investInFuture')}</h2>
          <p className="section-subtitle">{t('chooseFinancialProducts')}</p>
        </div>
        
        <div className="tabs-container">
          <button 
            className={`tab ${activeTab === 'deposit' ? 'active' : ''}`}
            onClick={() => { setActiveTab('deposit'); setCurrentIndex(0); }}
          >
            {t('depositTab')}
          </button>
          <button 
            className={`tab ${activeTab === 'loans' ? 'active' : ''}`}
            onClick={() => { setActiveTab('loans'); setCurrentIndex(0); }}
          >
            {t('loansTab')}
          </button>
        </div>
        
        <div className="products-carousel">
          <div className="carousel-container">
            {currentItems.map((item, index) => (
              <div key={index} className="investment-card">
                <div className="card-image">
                  <div className="image-placeholder">
                    <div className="icon-large">{item.image}</div>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{t(item.titleKey)}</h3>
                  <p className="card-description">
                    {item.features[0]} with {item.rate} interest rate. 
                    {activeTab === 'deposit' ? `Tenure: ${item.tenure}` : `Amount: ${item.amount}`}
                  </p>
                  <a href={item.link} className="learn-more-link">
                    <span>Learn More</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {canGoPrev && (
            <button className="carousel-nav prev" onClick={handlePrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          {canGoNext && (
            <button className="carousel-nav next" onClick={handleNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DepositSection;
