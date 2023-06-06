import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './aNavBar.css';
import { Button } from './button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 80) {
      document.querySelector('.navbar').classList.add('fixed', 'show');
    } else {
      document.querySelector('.navbar').classList.remove('fixed', 'show');
    }
  };

  useEffect(() => {
    showButton();
    handleScroll(); // Add this line to apply the class on initial render
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/images/wathaequi logo 009.png" alt="Logo" className="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              A propos de nous
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contactez nous
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
              Se connecter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
