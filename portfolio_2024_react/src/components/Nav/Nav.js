import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li class="center">Portfolio</li>
        <li><a href="#" id="mode-toggle">light Mode</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
