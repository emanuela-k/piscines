import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h4 className="subtitle">CE QUE NOUS FAISONS</h4>
        <h2 className="title">CRÉONS DES MÉMOIRES QUI DURENT TOUTE UNE VIE</h2>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-image-wrapper">
            <img src="image/construction.final.jpg" alt="Construction de Piscine" />
          </div>
          <div className="service-content">
            <h3>CONSTRUCTION DE PISCINE</h3>
            <p>Construisez votre piscine depuis le début, en utilisant les matériaux et équipements de votre choix.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-image-wrapper">
            <img src="image/conception.jpg" alt="Conception de Piscine" />
          </div>
          <div className="service-content">
            <h3>CONCEPTION DE PISCINE</h3>
            <p>Nous vous aidons à planifier et concevoir votre piscine idéale, selon vos préférences, budget et espace.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-image-wrapper">
            <img src="image/renovation.final.jpg" alt="Rénovation de Piscine" />
          </div>
          <div className="service-content">
            <h3>RÉNOVATION DE PISCINE</h3>
            <p>Rénovez ou modernisez votre piscine existante pour lui donner un nouveau look ou améliorer sa fonctionnalité.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;