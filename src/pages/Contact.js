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
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = 'Invalid email';
    if (!formData.phone.match(/^[0-9+\-()\s]{7,}$/)) newErrors.phone = 'Invalid phone';
    if (!formData.subject.trim()) newErrors.subject = 'Subject required';
    if (formData.message.trim().length < 10) newErrors.message = 'Min 10 chars';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-modern-wrapper">
      <div className="contact-modern-header">
        <div className="contact-modern-inner">
          <h1>{t('contact')}</h1>
          <p>{t('contactTagline')}</p>
        </div>
      </div>

      <div className="contact-modern-content">
        <div className="contact-layout">
          <div className="contact-info-column">
            <div className="info-grid">
              <div className="info-tile">
                <div className="info-icon">📍</div>
                <div className="info-body">
                  <h4>{t('headOffice')}</h4>
                  <p>{t('headOfficeAddress')}</p>
                </div>
              </div>
              <div className="info-tile">
                <div className="info-icon">📞</div>
                <div className="info-body">
                  <h4>{t('phoneNumbers')}</h4>
                  <p>+91 22 35008395<br/>+91 22 35136888<br/>+91 22 35030233<br/>+91 22 35244776</p>
                </div>
              </div>
              <div className="info-tile">
                <div className="info-icon">✉️</div>
                <div className="info-body">
                  <h4>{t('emailLabel')}</h4>
                  <p>info@shivsahyadripatpedhi.com</p>
                </div>
              </div>
              <div className="info-tile">
                <div className="info-icon">⏰</div>
                <div className="info-body">
                  <h4>{t('businessHours')}</h4>
                  <p>{t('hoursWeekdays')}<br/>{t('hoursSaturday')}<br/>{t('hoursSunday')}</p>
                </div>
              </div>
            </div>
            <div className="social-strip">
              <span className="social-label">{t('connectWithUsShort')}</span>
              <div className="social-links-row">
                <a href="https://www.facebook.com/Shiv-Sahyadri-Patpedhi-Ltd-2353208674745685/" target="_blank" rel="noopener noreferrer" className="social-link-item facebook" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/shivsahyadri_patpedhi" target="_blank" rel="noopener noreferrer" className="social-link-item instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/@ShivsahyadriLearning" target="_blank" rel="noopener noreferrer" className="social-link-item youtube" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-column">
            <div className="form-card">
              <h2>{t('sendMessage')}</h2>
              {submitted && <div className="form-banner">✓ Message received</div>}
              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">{t('fullName')} *</label>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t('placeholderFullName')} aria-invalid={errors.name ? 'true':'false'} required />
                  {errors.name && <div className="error-text">{errors.name}</div>}
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="email">{t('emailAddress')} *</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t('placeholderEmail')} aria-invalid={errors.email ? 'true':'false'} required />
                    {errors.email && <div className="error-text">{errors.email}</div>}
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{t('phoneNumber')} *</label>
                    <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('placeholderPhone')} aria-invalid={errors.phone ? 'true':'false'} required />
                    {errors.phone && <div className="error-text">{errors.phone}</div>}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="subject">{t('subjectLabel')} *</label>
                  <input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder={t('placeholderSubject')} aria-invalid={errors.subject ? 'true':'false'} required />
                  {errors.subject && <div className="error-text">{errors.subject}</div>}
                </div>
                <div className="field">
                  <label htmlFor="message">{t('messageLabel')} *</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder={t('placeholderMessage')} aria-invalid={errors.message ? 'true':'false'} required />
                  {errors.message && <div className="error-text">{errors.message}</div>}
                </div>
                <button type="submit" className="primary-send-btn" disabled={submitting}>{submitting ? t('sending') : t('submitMessage')}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
