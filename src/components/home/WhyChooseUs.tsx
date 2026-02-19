import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-content">
          <div className="section-header">
            <div className="header-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#0095ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#0095ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#0095ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="section-subtitle">À PROPOS D'EDIFIX SÀRL</h4>
          </div>
          
          <h2 className="section-title">
            Pourquoi devriez-vous <span className="highlight">choisir</span> nos <span className="highlight">services</span>?
          </h2>
          
          <div className="section-text">
            <p>
              Edifix Sàrl est une entreprise engagée et passionnée, spécialisée dans la conception et la réalisation de piscines d’exception.
              Notre équipe expérimentée utilise des matériaux de haute qualité et des techniques modernes pour garantir que vos espaces 
              aquatiques ne soient pas seulement magnifiques, mais aussi durables et sécurisés.
            </p>
            <p>
              Nous servons fièrement nos clients dans toute la Suisse, offrant une large gamme de services incluant la conception de piscines, 
              la construction, la rénovation, l'entretien, le nettoyage et bien plus encore. Votre satisfaction est notre priorité.
            </p>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default WhyChooseUs;

