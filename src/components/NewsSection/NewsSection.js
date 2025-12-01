import React from 'react';
import Slider from 'react-slick';
import { useLanguage } from '../../contexts/LanguageContext';
import './NewsSection.css';

const NewsSection = () => {
  const { t } = useLanguage();
  
  const news = [
    {
      date: '31 March 2019',
      title: '1000 Crore Business Milestone',
      description: 'Successfully achieved the remarkable target of 1000 crore business, marking a significant milestone in our journey of growth and excellence.',
      icon: '🎉',
      category: 'Achievement'
    },
    {
      date: '2024',
      title: 'Digital Banking Launch',
      description: 'Launched our state-of-the-art mobile banking application with advanced features for seamless digital banking experience.',
      icon: '📱',
      category: 'Technology'
    },
    {
      date: '2023',
      title: 'Branch Network Expansion',
      description: 'Expanded our service network to 40 branches across Maharashtra, bringing banking services closer to our valued customers.',
      icon: '🏦',
      category: 'Expansion'
    },
    {
      date: '2022',
      title: 'Customer Excellence Award',
      description: 'Honored with prestigious award for outstanding customer service and commitment to excellence in cooperative banking.',
      icon: '🏆',
      category: 'Recognition'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
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
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('newsAndEvent')}</h2>
          <p className="section-subtitle-white">Stay updated with our latest achievements and milestones</p>
        </div>
        
        <div className="news-carousel">
          <Slider {...settings}>
            {news.map((item, index) => (
              <div key={index} className="news-slide">
                <div className="news-card">
                  <div className="news-badge">{item.category}</div>
                  <div className="news-icon-large">{item.icon}</div>
                  <div className="news-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
