import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/ocr-carousel">OCR Carousel</Link></li>
        {/* Ajoutez ici d'autres liens pour d'autres pages */}
      </ul>
    </nav>
  );
};

export default Nav;
