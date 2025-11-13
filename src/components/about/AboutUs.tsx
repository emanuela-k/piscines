import './AboutUs.css';
import ScrollingWords from '../home/ScrollingWords';
import FAQ from './FAQ';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-hero">
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">À PROPOS</h1>
        </div>
      </div>
      <div className="about-content-wrapper">
        <div className="about-content">
          <div className="about-header">
            <div className="header-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0095ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#0095ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#0095ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="about-subtitle">À PROPOS D'EDIFIX SÀRL</h4>
          </div>
          
          <h2 className="about-main-title">
            Pourquoi devriez-vous <span className="highlight">choisir</span> nos <span className="highlight">services</span>?
          </h2>
          
          <div className="about-text-content">
            <p className="about-paragraph">
              Forte de plus de 20 ans d'expérience sur le marché suisse, EDIFIX Sàrl est fondé en 2021 de la volonté de réunir une équipe d'experts passionnés autour d'une même vision : offrir des réalisations alliant qualité, sécurité et excellence technique.
            </p>
            <p className="about-paragraph">
              Grâce à notre savoir-faire dans le domaine de la construction et notre sens du détail, nous accompagnons chaque client avec sérieux et engagement.
            </p>
            <p className="about-paragraph">
              Chez EDIFIX, chaque projet est pensé comme une œuvre durable, conçue pour allier confort, esthétique et fiabilité.
            </p>
          </div>
        </div>
      </div>
      <ScrollingWords />
      <FAQ />
    </section>
  );
};

export default AboutUs;
