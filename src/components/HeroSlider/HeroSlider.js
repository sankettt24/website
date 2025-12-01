import React from 'react';
import Slider from 'react-slick';
import { useLanguage } from '../../contexts/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.css';

const HeroSlider = () => {
  const { t } = useLanguage();
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
  };

  const slides = [
    {
      titleKey: "heroTitle1",
      subtitleKey: "heroSubtitle1",
      features: ["heroFeature1", "heroFeature2"],
      link: "/deposit/balkalyan-deposit",
      image: "https://www.shivsahyadripatpedhi.com/uploads/home-banner/slider4.jpg"
    },
    {
      titleKey: "heroTitle2",
      subtitleKey: "heroSubtitle2",
      features: [],
      link: "/services/micro-atm",
      image: "https://www.shivsahyadripatpedhi.com/uploads/home-banner/slider5.jpg"
    },
    {
      titleKey: "heroTitle3",
      subtitleKey: "heroSubtitle3",
      features: [],
      link: "/deposit/mis-deposit",
      image: "https://www.shivsahyadripatpedhi.com/uploads/home/slider6.jpg"
    },
    {
      titleKey: "heroTitle4",
      subtitleKey: "heroSubtitle4",
      features: [],
      link: "/loan/property-mortgage-loan",
      image: "https://www.shivsahyadripatpedhi.com/uploads/home/Diwalicopy2.jpg"
    },
    {
      titleKey: "heroTitle5",
      subtitleKey: "heroSubtitle5",
      features: [],
      link: "/digital/mobile-banking-app",
      image: "https://www.shivsahyadripatpedhi.com/uploads/home/mobile-banking-home-banner.jpg"
    },
    {
      titleKey: "heroTitle6",
      subtitleKey: "heroSubtitle6",
      features: [],
      link: "/services/locker",
      image: "https://www.shivsahyadripatpedhi.com/uploads/home-banner/slider3.jpg"
    }
  ];

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="slide-overlay">
                <div className="container">
                  <div className="slide-text">
                    <h2>{t(slide.titleKey)}</h2>
                    <p>{t(slide.subtitleKey)}</p>
                    {slide.features.length > 0 && (
                      <div className="features">
                        {slide.features.map((featureKey, idx) => (
                          <span key={idx} className="feature-badge">✓ {t(featureKey)}</span>
                        ))}
                      </div>
                    )}
                    <a href={slide.link} className="learn-more-btn">{t('learnMore').toUpperCase()}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
