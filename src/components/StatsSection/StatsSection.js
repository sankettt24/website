import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './StatsSection.css';

const StatsSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    { value: 40, suffix: "+", labelKey: "yearsOfService", fallback: "Years of Service" },
    { value: 40, suffix: "", labelKey: "branches", fallback: "Branches" },
    { value: 250000, suffix: "+", labelKey: "totalMembers", fallback: "Members" },
    { value: 1000, suffix: " Cr+", labelKey: "turnover", fallback: "Business Turnover" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const AnimatedNumber = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible, value]);

    return (
      <span className="stat-number">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-row">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <span className="stat-number">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="stat-label">{t ? t(stat.labelKey) : stat.fallback}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
