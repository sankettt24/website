import React from 'react';
import Slider from 'react-slick';
import { useLanguage } from '../../contexts/LanguageContext';
import './ServicesSection.css';

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      titleKey: "locker",
      descKey: "lockerDesc",
      link: "/services/locker",
      icon: "🔐"
    },
    {
      titleKey: "fundTransfer",
      descKey: "fundTransferDesc",
      link: "/digital/fund-transfer",
      icon: "💸"
    },
    {
      titleKey: "smsBanking",
      descKey: "smsBankingDesc",
      link: "/services/sms-banking",
      icon: "📱"
    },
    {
      titleKey: "microATM",
      descKey: "microATMDesc",
      link: "/services/micro-atm",
      icon: "🏧"
    },
    {
      titleKey: "coreBanking",
      descKey: "coreBankingDesc",
      link: "/services/core-banking",
      icon: "🖥️"
    },
    {
      titleKey: "mobileBankingApp",
      descKey: "mobileBankingDesc",
      link: "/mobile-banking-app",
      icon: "📲"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('servicesWeOffer')}</h2>
          <p className="section-subtitle">Comprehensive banking solutions for all your needs</p>
        </div>
        
        <div className="services-carousel">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="service-slide">
                <a href={service.link} className="service-card">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                  <h3>{t(service.titleKey)}</h3>
                  <p>{t(service.descKey)}</p>
                  <span className="service-link">Learn More →</span>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
