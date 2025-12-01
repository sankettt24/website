import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Pages.css';

const Locations = () => {
  const { t } = useLanguage();

  const branches = [
    { name: 'Head Office - Matunga', address: 'Matunga Road, Mumbai 400019', phone: '+91 22 35008395' },
    { name: 'Dadar Branch', address: 'Dadar West, Mumbai 400028', phone: '+91 22 24301234' },
    { name: 'Thane Branch', address: 'Thane West, Thane 400601', phone: '+91 22 25401234' },
    { name: 'Kalyan Branch', address: 'Kalyan East, Kalyan 421306', phone: '+91 251 2301234' },
    { name: 'Dombivli Branch', address: 'Dombivli East, Dombivli 421201', phone: '+91 251 2401234' },
    { name: 'Panvel Branch', address: 'New Panvel, Navi Mumbai 410206', phone: '+91 22 27401234' },
    { name: 'Vashi Branch', address: 'Vashi, Navi Mumbai 400703', phone: '+91 22 27801234' },
    { name: 'Airoli Branch', address: 'Airoli, Navi Mumbai 400708', phone: '+91 22 27701234' },
    { name: 'Mulund Branch', address: 'Mulund West, Mumbai 400080', phone: '+91 22 25601234' },
    { name: 'Bhandup Branch', address: 'Bhandup West, Mumbai 400078', phone: '+91 22 25901234' },
    { name: 'Vikhroli Branch', address: 'Vikhroli East, Mumbai 400083', phone: '+91 22 25701234' },
    { name: 'Ghatkopar Branch', address: 'Ghatkopar East, Mumbai 400077', phone: '+91 22 25101234' },
    { name: 'Kurla Branch', address: 'Kurla West, Mumbai 400070', phone: '+91 22 26501234' },
    { name: 'Chembur Branch', address: 'Chembur East, Mumbai 400071', phone: '+91 22 25201234' },
    { name: 'Andheri Branch', address: 'Andheri East, Mumbai 400069', phone: '+91 22 28301234' },
    { name: 'Borivali Branch', address: 'Borivali West, Mumbai 400092', phone: '+91 22 28601234' },
    { name: 'Malad Branch', address: 'Malad West, Mumbai 400064', phone: '+91 22 28401234' },
    { name: 'Goregaon Branch', address: 'Goregaon East, Mumbai 400063', phone: '+91 22 28701234' },
    { name: 'Kandivali Branch', address: 'Kandivali West, Mumbai 400067', phone: '+91 22 28501234' },
    { name: 'Jogeshwari Branch', address: 'Jogeshwari East, Mumbai 400060', phone: '+91 22 26801234' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <h1>{t('locations')}</h1>
          <p>Find a branch near you</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="locations-intro">
            <p>
              As on 31.03.2025, the Society has a network of <strong>40 Branches</strong> across Maharashtra. 
              These branches are manned by a dedicated workforce of more than 250 employees who are ably 
              supported and guided by 4 Regional Offices spread across our command area and the Head Office at Matunga Road.
            </p>
          </div>

          <div className="branches-grid">
            {branches.map((branch, index) => (
              <div key={index} className="branch-card">
                <div className="branch-icon">📍</div>
                <h3>{branch.name}</h3>
                <p className="branch-address">{branch.address}</p>
                <p className="branch-phone">
                  <span>📞</span> {branch.phone}
                </p>
                <a href={`tel:${branch.phone}`} className="branch-btn">
                  Call Now
                </a>
              </div>
            ))}
          </div>

          <div className="map-section">
            <h2>Visit Our Head Office</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9474849832943!2d72.84324631490193!3d19.02952098710999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec7f8e6e0e3%3A0x2b6c8e9c8e8e8e8e!2sMatunga%20Road%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Head Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
