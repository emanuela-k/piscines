import './HeroSection.css'; 
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="fade-in delay-1">QUALITÉ, FIABILITÉ, SATISFACTION</h1>
          <p className="fade-in delay-2">
           "Nous ne construisons pas seulement des piscines — nous créons des expériences. 
           Du design à la dernière goutte d'eau, nous donnons vie à vos rêves de jardin.
            Un savoir-faire de qualité, 
           une beauté durable et une détente totale . Plongez dans l'excellence avec nous."
          </p>
          <Link to='/contact' className="hero-button fade-in delay-3">CONTACTEZ-NOUS</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

