import './ContactInfo.css';
const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="contact-info-header">
        <h2 className="contact-info-title">
          Restons <span className="highlight">En Contact</span>
        </h2>
        <p className="contact-info-subtitle">
          Transformez votre espace avec nos services fiables et respectueux de l'environnement. Laissez-nous gérer les détails pendant que vous profitez d'un cadre impeccable.
        </p>
      </div>

      <div className="contact-cards">
        <article className="contact-card">
          <div className="contact-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.52 19.52 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72 12.82 12.82 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.82 12.82 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="contact-card-title">Nos numéros</h3>
          <p className="contact-card-text">Téléphone :(+41 )797897198 </p>
         
        </article>

        <article className="contact-card">
          <div className="contact-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 6 12 13 2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="contact-card-title">Email</h3>
          <p className="contact-card-text">info@edifix.ch</p>
          
        </article>

        <article className="contact-card">
          <div className="contact-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="contact-card-title">Adresse</h3>
          <p className="contact-card-text">Chemin des Deux-Communes 7</p>
          <p className="contact-card-text">1226 Thônex, Suisse</p>
        </article>

        <article className="contact-card">
          <div className="contact-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="contact-card-title">Horaires</h3>
          <p className="contact-card-text">Lun - Ven : 8h00 - 12h00 | 13h00 - 17h00</p>
          <p className="contact-card-text">Urgences : 24h/24 et 7j/7</p>
        </article>
      </div>
    </section>
  );
};

export default ContactInfo;

