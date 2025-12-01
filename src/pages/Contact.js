import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Pages.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>{t('contact')}</h1>
          <p>Get in touch with us</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Head Office</h4>
                  <p>Matunga Road, Mumbai, Maharashtra</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h4>Phone Numbers</h4>
                  <p>+91 22 35008395</p>
                  <p>+91 22 35136888</p>
                  <p>+91 22 35030233</p>
                  <p>+91 22 35244776</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>info@shivsahyadripatpedhi.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">⏰</div>
                <div className="info-content">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 10:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="social-links-section">
                <h4>Connect With Us</h4>
                <div className="social-buttons">
                  <a href="https://www.facebook.com/Shiv-Sahyadri-Patpedhi-Ltd-2353208674745685/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                    📘 Facebook
                  </a>
                  <a href="https://instagram.com/shivsahyadri_patpedhi" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                    📸 Instagram
                  </a>
                  <a href="https://youtube.com/@ShivsahyadriLearning" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
                    ▶️ YouTube
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
