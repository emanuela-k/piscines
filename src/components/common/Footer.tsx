import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Company Information Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/image/logo-1.png" alt="Edifix Sàrl Logo" className="logo-image" />
            <div className="logo-text">
              <h2 className="logo-title">EDIFIX SÀRL</h2>
              <p className="logo-subtitle">PISCINES</p>
            </div>
          </div>
          <p className="footer-mission">
            Nous travaillons avec passion pour relever les défis et établir de nouveaux standards dans l'industrie des piscines.
          </p>
        </div>

        {/* Navigation Links Section */}
        <div className="footer-section">
          <h3 className="footer-section-title">SERVICES</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Accueil</Link></li>
            <li><Link to="/about-us" className="footer-link">À Propos</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/pool-layouts" className="footer-link">Nos Réalisations</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        {/* Working Hours Section */}
        <div className="footer-section">
          <h3 className="footer-section-title">HEURES D'OUVERTURE</h3>
          <div className="working-hours">
            <p className="hours-item">Lun - Ven: 8h00 - 17h00</p>
            <p className="hours-item">Samedi/Dimanche: Fermé</p>
          </div>
          <div className="social-media">
            <h4 className="social-title">Suivez-nous</h4>
            <div className="social-icons">
              <a 
                href="https://www.instagram.com/edifix_sarl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/edifix.sarl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/edifix-sarl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <div className="contact-item">
            <div className="contact-header">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4 className="contact-title">Appelez-nous</h4>
            </div>
            <p className="contact-text">+41797897198</p>
          
          </div>

          <div className="contact-item">
            <div className="contact-header">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4 className="contact-title">Email</h4>
            </div>
            <p className="contact-text">info@edifix.ch</p>
          </div>

          <div className="contact-item">
            <div className="contact-header">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4 className="contact-title">Location</h4>
            </div>
            <p className="contact-text">Chemin des deux-communes 7   
              1226 Thonex ,Suisse </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">©Copyright 2025 Edifix Sàrl. Tous droits réservés.</p>
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15l-6-6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
