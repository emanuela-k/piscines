import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">Edifix Sàrl</div>
      <nav className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
        <Link to="/" onClick={closeMenu}>ACCUEIL</Link>
        <Link to="/about-us" onClick={closeMenu}>À PROPOS</Link>
        <Link to="/services" onClick={closeMenu}>SERVICES</Link>
        <Link to="/pool-layouts" onClick={closeMenu}>NOS RÉALISATIONS</Link>
        <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
      </nav>
      <button 
        className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;

