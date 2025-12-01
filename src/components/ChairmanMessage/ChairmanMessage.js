import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import FadeContent from '../FadeContent/FadeContent';
import './ChairmanMessage.css';

const ChairmanMessage = () => {
  const { t } = useLanguage();
  
  return (
    <section className="chairman-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('chairmanMessage')}</h2>
        </div>
        
        <div className="chairman-content">
          <FadeContent blur={true} duration={0.8} delay={0} threshold={0.3}>
            <div className="chairman-image">
              <img 
              src="https://www.shivsahyadripatpedhi.com/uploads/chairman-message/wangde.png" 
              alt={t('chairmanName')}
            />
            </div>
          </FadeContent>
          
          <FadeContent blur={true} duration={0.8} delay={0.2} threshold={0.3}>
            <div className="chairman-text">
            <h3>{t('chairmanName')}</h3>
            <h4>{t('founderChairman')}</h4>
            <p>
              {t('chairmanText')}
            </p>
            <a href="/board-of-directors#founder-chairman" className="learn-more-btn">
              {t('learnMore')}
            </a>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
