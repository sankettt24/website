import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Timeline } from '../components/Timeline/Timeline';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import FadeContent from '../components/FadeContent/FadeContent';
import './Pages.css';

const About = () => {
  const { t } = useLanguage();

  const timelineData = [
    {
      title: "1980s",
      content: (
        <div>
          <h4>Foundation Years</h4>
          <p>Established to serve the financial needs of the local community with a vision of inclusive growth. Started with a small office and big dreams to empower people financially.</p>
        </div>
      )
    },
    {
      title: "2000s",
      content: (
        <div>
          <h4>Expansion Phase</h4>
          <p>Expanded to multiple branches across Mumbai and Maharashtra, reaching thousands of families. Introduced new financial products and modernized banking operations.</p>
        </div>
      )
    },
    {
      title: "2019",
      content: (
        <div>
          <h4>Major Milestone</h4>
          <p>Achieved 1000 Crore business target, marking a new era of financial strength. Recognized as one of the leading cooperative credit societies in Maharashtra.</p>
        </div>
      )
    },
    {
      title: "2025",
      content: (
        <div>
          <h4>Digital Transformation</h4>
          <p>Launched mobile banking and digital services for seamless banking experience. Embracing technology while maintaining our commitment to personalized service.</p>
        </div>
      )
    }
  ];

  return (
    <div className="page-container about-page">
      <div className="page-hero">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-label">Who We Are</span>
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={8}
              containerClassName=""
              textClassName=""
            >
              About Shiv Sahyadri Patpedhi
            </ScrollReveal>
            <p>Empowering communities through trusted financial services since 1980s</p>
          </div>
        </div>
      </div>

      <FadeContent blur={true} duration={1} threshold={0.2}>
        <div className="about-stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <h3>40+</h3>
                <p>Years of Excellence</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <h3>2.5L+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <h3>40</h3>
                <p>Branches</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <h3>1000Cr+</h3>
                <p>Business Turnover</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeContent>

      <div className="page-content">
        <div className="container">
          <FadeContent blur={true} duration={0.9} threshold={0.25}>
            <section className="about-intro">
            <div className="intro-grid">
              <div className="intro-text">
                <span className="section-label">Our Story</span>
                <h2>Building Trust, Creating Value</h2>
                <p>
                  Shiv Sahyadri Sahakari Patpedhi Maryadit, Mumbai is a progressive cooperative credit society 
                  committed to providing quality financial services to its members. Established with the vision 
                  of promoting thrift and financial inclusion, we have grown to become one of the trusted names 
                  in cooperative banking in Maharashtra.
                </p>
                <p>
                  With over 40 years of service, we have expanded our network to 40 branches across Maharashtra, 
                  serving more than 250,000 customers with a dedicated workforce of over 250 employees.
                </p>
                <div className="intro-features">
                  <div className="feature-badge">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>RBI Registered</span>
                  </div>
                  <div className="feature-badge">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>100% Secure</span>
                  </div>
                  <div className="feature-badge">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Customer First</span>
                  </div>
                </div>
              </div>
              <div className="intro-image">
                <div className="image-placeholder">
                  <svg viewBox="0 0 400 400" fill="none">
                    <rect width="400" height="400" fill="url(#grad1)"/>
                    <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="3" opacity="0.3"/>
                    <circle cx="200" cy="200" r="90" stroke="white" strokeWidth="3" opacity="0.5"/>
                    <circle cx="200" cy="200" r="60" fill="white" opacity="0.2"/>
                    <path d="M200 140v60m-30-30h60" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#1e3c72", stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:"#2a5298", stopOpacity:1}} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </section>
          </FadeContent>

          <FadeContent blur={false} duration={1} threshold={0.2}>
            <section className="milestone-section">
            <div className="section-header">
              <span className="section-label">Our Journey</span>
              <h2>Major Milestones</h2>
              <p>Decades of growth, innovation, and service excellence</p>
            </div>
            <Timeline data={timelineData} />
          </section>
          </FadeContent>

          <FadeContent blur={true} duration={0.9} threshold={0.25}>
            <section className="vision-mission-section">
            <div className="vm-modern-grid">
              <div className="vm-modern-card vision-card">
                <div className="vm-bg-pattern"></div>
                <div className="vm-icon-modern">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted and preferred cooperative credit society in Maharashtra, 
                  providing innovative financial solutions and contributing to the economic development 
                  of our members and society.
                </p>
              </div>
              <div className="vm-modern-card mission-card">
                <div className="vm-bg-pattern"></div>
                <div className="vm-icon-modern">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide accessible, affordable, and quality financial services to our members 
                  while maintaining the highest standards of transparency, integrity, and customer service. 
                  We aim to promote financial literacy and inclusion in the communities we serve.
                </p>
              </div>
            </div>
          </section>
          </FadeContent>

          <FadeContent blur={true} duration={0.9} threshold={0.25}>
            <section className="values-section">
            <div className="section-header">
              <span className="section-label">What Drives Us</span>
              <h2>Core Values</h2>
              <p>The principles that guide every decision we make</p>
            </div>
            <div className="values-modern-grid">
              <div className="value-modern-card">
                <div className="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Trust</h4>
                <p>Building lasting relationships through reliability and transparency</p>
              </div>
              <div className="value-modern-card">
                <div className="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Integrity</h4>
                <p>Upholding ethical standards in all our operations</p>
              </div>
              <div className="value-modern-card">
                <div className="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Excellence</h4>
                <p>Striving for the highest quality in service delivery</p>
              </div>
              <div className="value-modern-card">
                <div className="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Customer Focus</h4>
                <p>Putting our members' needs at the center of everything we do</p>
              </div>
              <div className="value-modern-card">
                <div className="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Innovation</h4>
                <p>Embracing technology and new ideas for better service</p>
              </div>
              <div className="value-modern-card">
                <div className="value-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none">
                    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="19 12 12 19 5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Growth</h4>
                <p>Contributing to the prosperity of our members and community</p>
              </div>
            </div>
          </section>
          </FadeContent>

          <FadeContent blur={true} duration={0.9} threshold={0.25}>
            <section className="leadership-section">
            <div className="section-header">
              <span className="section-label">Leadership</span>
              <h2>Board of Directors</h2>
              <p>Experienced leaders guiding our vision</p>
            </div>
            <div className="leader-card-modern">
              <div className="leader-image-wrapper">
                <div className="leader-image">
                  <img src="https://www.shivsahyadripatpedhi.com/uploads/chairman-message/wangde.png" alt="Chairman" />
                </div>
                <div className="leader-badge">Founder Chairman</div>
              </div>
              <div className="leader-info">
                <h3>Mr. Dnyaneshwar B. Wangde</h3>
                <p className="leader-title">Founder Chairman</p>
                <p className="leader-bio">
                  Under his visionary leadership, Shiv Sahyadri Patpedhi has grown from a small cooperative 
                  society to a major financial institution serving lakhs of customers across Maharashtra. 
                  His commitment to financial inclusion and community development continues to inspire our mission.
                </p>
                <div className="leader-achievements">
                  <div className="achievement-tag">40+ Years Experience</div>
                  <div className="achievement-tag">Cooperative Leader</div>
                  <div className="achievement-tag">Social Impact</div>
                </div>
              </div>
            </div>
          </section>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};

export default About;
