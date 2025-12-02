import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import FadeContent from '../FadeContent/FadeContent';
import './QuickLinks.css';

const QuickLinks = () => {
  const { t } = useLanguage();
  const [autoIndex, setAutoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoIndex(prev => (prev + 1) % 3);
    }, 3500); // cycle every 3.5s
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="quick-links">
      <div className="container">
        <div className="quick-links-grid">
          <FadeContent blur={true} duration={0.6} delay={0} threshold={0.3}>
            <a href="/deposit" className={`quick-link-tile deposit ${autoIndex === 0 ? 'simulate-hover' : ''}`}>
              <div className="tile-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
              </div>
              <div className="tile-content">
                <div className="icon-circle">
                  <svg className="tile-icon" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
                    <path d="M32 8C18.745 8 8 18.745 8 32s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8zm0 4c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20S20.954 12 32 12z" fill="currentColor"/>
                    <path d="M28 20h8v4h-8v-4zm0 8h8v16h-8V28z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="tile-text">
                  <h3>{t('deposit')}</h3>
                  <p>{t('depositDesc')}</p>
                </div>
                <div className="tile-hover-effect">
                  <span className="explore-text">Explore →</span>
                </div>
              </div>
            </a>
          </FadeContent>

          <FadeContent blur={true} duration={0.6} delay={0.15} threshold={0.3}>
            <a href="/loan" className={`quick-link-tile loans ${autoIndex === 1 ? 'simulate-hover' : ''}`}>
              <div className="tile-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
              </div>
              <div className="tile-content">
                <div className="icon-circle">
                  <svg className="tile-icon" viewBox="0 0 64 64" fill="none">
                    <path d="M8 24h48v28H8V24z" stroke="currentColor" strokeWidth="3" fill="none"/>
                    <path d="M16 24V16a16 16 0 0132 0v8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <circle cx="32" cy="38" r="4" fill="currentColor"/>
                    <rect x="30" y="38" width="4" height="8" fill="currentColor"/>
                  </svg>
                </div>
                <div className="tile-text">
                  <h3>{t('loans')}</h3>
                  <p>{t('loansDesc')}</p>
                </div>
                <div className="tile-hover-effect">
                  <span className="explore-text">Explore →</span>
                </div>
              </div>
            </a>
          </FadeContent>

          <FadeContent blur={true} duration={0.6} delay={0.3} threshold={0.3}>
            <a href="/services" className={`quick-link-tile services ${autoIndex === 2 ? 'simulate-hover' : ''}`}>
              <div className="tile-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
              </div>
              <div className="tile-content">
                <div className="icon-circle">
                  <svg className="tile-icon" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3" fill="none"/>
                    <path d="M32 8v8m0 32v8M56 32h-8M16 32H8m40-20l-5.66 5.66M21.66 42.34L16 48m32 0l-5.66-5.66M21.66 21.66L16 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="tile-text">
                  <h3>{t('services')}</h3>
                  <p>{t('servicesDesc')}</p>
                </div>
                <div className="tile-hover-effect">
                  <span className="explore-text">Explore →</span>
                </div>
              </div>
            </a>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
