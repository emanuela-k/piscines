import ServicesPageContent from '../components/services/ServicesPageContent';
import './PageHero.css';

const Services = () => {
  return (
    <section>
      <div className="page-hero">
        <div className="page-hero-overlay">
          <h1 className="page-hero-title">SERVICES</h1>
        </div>
      </div>
      <ServicesPageContent />
    </section>
  );
};

export default Services;
