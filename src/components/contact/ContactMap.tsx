import './ContactMap.css';

const ContactMap = () => {
  return (
    <section className="contact-map-section" aria-label="Localisation d'Edifix Sàrl">
      <div className="contact-map-container">
        <iframe
          className="contact-map-frame"
          title="Edifix Sàrl Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.351973296225!2d6.1978820122717605!3d46.18291368778154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c634611f2ccc9%3A0x54824bf83dde8ecc!2sChemin%20des%20Deux-Communes%207%2C%201226%20Th%C3%B4nex%2C%20Suisse!5e0!3m2!1sfr!2sch!4v1730992900000!5m2!1sfr!2sch"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactMap;

