import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { useLanguage } from '../../contexts/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.css';

const HeroSlider = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    touchThreshold: 10,
    beforeChange: (_, next) => {
      setCurrentSlide(next);
    },
    afterChange: (index) => {
      setCurrentSlide(index);
    }
  };

  // Simple parallax handlers (mouse move within slide)
  const rafId = useRef(null);
  const handleParallaxMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2); // -1..1
    const dy = (e.clientY - cy) / (rect.height / 2); // -1..1

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const text = target.querySelector('.slide-text');
      const glow1 = target.querySelector('.glow-1');
      const glow2 = target.querySelector('.glow-2');
      if (text) text.style.transform = `translate3d(${dx * 10}px, ${dy * 10}px, 0)`;
      if (glow1) glow1.style.transform = `translate3d(${dx * 25}px, ${dy * 25}px, 0)`;
      if (glow2) glow2.style.transform = `translate3d(${dx * -20}px, ${dy * -20}px, 0)`;
    });
  };

  const handleParallaxLeave = (e) => {
    const target = e.currentTarget;
    const text = target.querySelector('.slide-text');
    const glow1 = target.querySelector('.glow-1');
    const glow2 = target.querySelector('.glow-2');
    if (text) text.style.transform = 'translate3d(0,0,0)';
    if (glow1) glow1.style.transform = 'translate3d(0,0,0)';
    if (glow2) glow2.style.transform = 'translate3d(0,0,0)';
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
          <div key={index} className={`slide ${index === currentSlide ? 'is-active' : ''}`}>
            <div
              className={`slide-content ${index === currentSlide ? 'animate' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay" onMouseMove={handleParallaxMove} onMouseLeave={handleParallaxLeave}>
                <div className="glow glow-1" />
                <div className="glow glow-2" />
                <div className="container">
                  <div className={`slide-text ${index === currentSlide ? 'animate' : ''}`}>
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
