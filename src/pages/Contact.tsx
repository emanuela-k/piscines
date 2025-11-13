import './PageHero.css';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';

const Contact = () => (
  <section>
    <div className="page-hero">
      <div className="page-hero-overlay">
        <h1 className="page-hero-title">CONTACT</h1>
      </div>
    </div>
    <ContactInfo />
    <ContactForm />
    <ContactMap />
  </section>
);

export default Contact;
