import React from 'react';
import Slider from 'react-slick';
import { useLanguage } from '../../contexts/LanguageContext';
import './AwardsSection.css';

const AwardsSection = () => {
  const { t } = useLanguage();
  
  const awards = [
    {
      image: "https://www.shivsahyadripatpedhi.com/uploads/awards/patsanth-puraskar-2015.jpg",
      title: "Patsanth Puraskar 2015",
      description: "Excellence in cooperative banking"
    },
    {
      image: "https://www.shivsahyadripatpedhi.com/uploads/awards-home-page/sahakar-gaurav.jpg",
      title: "Sahakar Gaurav Award",
      description: "Recognition for outstanding service"
    },
    {
      image: "https://www.shivsahyadripatpedhi.com/uploads/awards-home-page/patsanth-puraskar-2014.jpg",
      title: "Patsanth Puraskar 2014",
      description: "Best cooperative society award"
    },
    {
      image: "https://www.shivsahyadripatpedhi.com/uploads/awards-home-page/patsantha-fedration.jpg",
      title: "Patsantha Federation Award",
      description: "Outstanding contribution to community"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="awards-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('awardsAchievements')}</h2>
          <p className="section-subtitle">Celebrating our journey of excellence and recognition</p>
        </div>
        
        <div className="awards-carousel">
          <Slider {...settings}>
            {awards.map((award, index) => (
              <div key={index} className="award-slide">
                <div className="award-card">
                  <div className="award-image-wrapper">
                    <img src={award.image} alt={award.title} />
                    <div className="award-overlay">
                      <div className="award-info">
                        <h3>{award.title}</h3>
                        <p>{award.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="view-all-container">
          <a href="/awards-achievements" className="view-all-btn">
            {t('viewAll')}
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
