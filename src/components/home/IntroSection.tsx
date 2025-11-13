import './IntroSection.css';

const IntroSection: React.FC = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-image">
          <img src="image/image15.jpg" alt="Pool Construction" />
        </div>
        <div className="intro-text">
          <h5>RÉSIDENTIEL & COMMERCIAL</h5>
          <h1>ENTREPRISE DE PISCINES À SERVICE COMPLET</h1>
          <p>
            Nous offrons des services de conception, construction, rénovation, maintenance et réparation de piscines
            pour les clients résidentiels et commerciaux.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;