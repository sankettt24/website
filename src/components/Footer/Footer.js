import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>{t('about')}</h3>
              <ul>
                <li><a href="/about">{t('profile')}</a></li>
                <li><a href="/about#history">{t('history')}</a></li>
                <li><a href="/about#vision-mission">{t('visionMission')}</a></li>
                <li><a href="/awards-achievements">{t('awardsAchievements')}</a></li>
                <li><a href="/progress-at-glance">{t('progressAtGlance')}</a></li>
                <li><a href="/special-thanks">{t('specialThanks')}</a></li>
                <li><a href="/special-thanks#our-bankers">{t('ourBankers')}</a></li>
                <li><a href="/legal-advisor">{t('legalAdvisor')}</a></li>
                <li><a href="/valuers">{t('valuers')}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>{t('deposit')}</h3>
              <ul>
                <li><a href="/deposit/saving-deposit">{t('savingDeposit')}</a></li>
                <li><a href="/deposit/current-deposit">{t('currentDeposit')}</a></li>
                <li><a href="/deposit/daily-deposit">{t('dailyDeposit')}</a></li>
                <li><a href="/deposit/balkalyan-deposit">{t('balkalyanDeposit')}</a></li>
                <li><a href="/deposit/recurring-deposit">{t('recurringDeposit')}</a></li>
                <li><a href="/deposit/lakhpati-deposit">{t('lakhpatiDeposit')}</a></li>
                <li><a href="/deposit/shiv-sankalp-deposit">{t('shivSankalpDeposit')}</a></li>
                <li><a href="/deposit/term-deposit">{t('termDeposit')}</a></li>
                <li><a href="/deposit/mis-deposit">{t('misDeposit')}</a></li>
                <li><a href="/deposit/double-deposit1">{t('doubleDeposit')}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>{t('loans')}</h3>
              <ul>
                <li><a href="/loan/personal-loan-emi">{t('personalLoan')}</a></li>
                <li><a href="/loan/property-mortgage-loan-emi">{t('propertyMortgageLoan')}</a></li>
                <li><a href="/loan/vehicle-loan">{t('vehicleLoan')}</a></li>
                <li><a href="/loan/loan-against-daily-deposit">{t('loanAgainstDaily')}</a></li>
                <li><a href="/loan/loan-against-rd-deposit">{t('loanAgainstRD')}</a></li>
                <li><a href="/loan/gold-loan">{t('goldLoan')}</a></li>
                <li><a href="/loan/machinery-loan">{t('machineryLoan')}</a></li>
                <li><a href="/loan/stock-mortgage-loan">{t('stockMortgageLoan')}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>{t('services')}</h3>
              <ul>
                <li><a href="/mobile-banking-app">{t('mobileBankingApp')}</a></li>
                <li><a href="/services/locker">{t('locker')}</a></li>
                <li><a href="/services/money-transfer">{t('moneyTransfer')}</a></li>
                <li><a href="/services/electric-bill-collection">{t('electricBillCollection')}</a></li>
                <li><a href="/services/sms-banking">{t('smsBanking')}</a></li>
                <li><a href="/services/micro-atm">{t('microATM')}</a></li>
                <li><a href="/services/core-banking">{t('coreBanking')}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>{t('informative')}</h3>
              <ul>
                <li><a href="/annual-report">{t('annualReport')}</a></li>
                <li><a href="/share-holder">{t('shareHolder')}</a></li>
                <li><a href="/emi-calculator">{t('emiCalculator')}</a></li>
                <li><a href="/kyc">{t('kyc')}</a></li>
              </ul>
              <h3 style={{marginTop: '20px'}}>{t('contact')}</h3>
              <ul>
                <li><a href="/customer-support">{t('customerCare')}</a></li>
                <li><a href="/feedback">{t('feedback')}</a></li>
                <li><a href="/locations">{t('locations')}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>{t('otherLink')}</h3>
              <ul>
                <li><a href="/career">{t('career')}</a></li>
                <li><a href="/apply">{t('openAccount')}</a></li>
                <li><a href="/notice">{t('notice')}</a></li>
                <li><a href="/elections">{t('elections')}</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact-info">
            <div className="contact-box">
              <h4>{t('forAnyQueries')}</h4>
              <p>
                <a href="tel:+912235008395">+91 22 35008395</a> / 
                <a href="tel:+912235136888">+91 22 35136888</a>
              </p>
              <p>
                <a href="tel:+912235030233">+91 22 35030233</a> / 
                <a href="tel:+912235244776">+91 22 35244776</a>
              </p>
              <p>
                {t('emailOn')} <a href="mailto:info@shivsahyadripatpedhi.com">info@shivsahyadripatpedhi.com</a>
              </p>
            </div>

            <div className="branch-info">
              <h4>40 {t('branches')}</h4>
              <p>
                {t('branchesInfo')}
              </p>
            </div>

            <div className="app-download">
              <h4>{t('downloadTheApp')}</h4>
              <div className="app-buttons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-social">
        <div className="container">
          <div className="social-content">
            <p>{t('connectWithUs')}</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/Shiv-Sahyadri-Patpedhi-Ltd-2353208674745685/?modal=admin_todo_tour" target="_blank" rel="noopener noreferrer" className="social-facebook" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com/shivsahyadri_patpedhi?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="social-instagram" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@ShivsahyadriLearning?si=TdIa0hfTI0TfgLlP" target="_blank" rel="noopener noreferrer" className="social-youtube" title="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>© 2025. Shiv Sahyadri Patpedhi Ltd. {t('allRightsReserved')}</p>
            <div className="footer-links">
              <a href="/locations">{t('nearestBranch')}</a>
              <a href="/feedback">{t('feedback')}</a>
              <a href="/faqs-deposit">{t('faqs')}</a>
              <a href="/sitemap">{t('sitemap')}</a>
              <a href="/terms-conditions">{t('termsConditions')}</a>
              <a href="/disclaimer">{t('disclaimer')}</a>
              <a href="/privacy-policy">{t('privacyPolicy')}</a>
            </div>
            <p className="footer-note">
              
            </p>
            <p className="footer-credit">
              {t('designMaintained')} <a href="" target="_blank" rel="noopener noreferrer">Sanket</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
