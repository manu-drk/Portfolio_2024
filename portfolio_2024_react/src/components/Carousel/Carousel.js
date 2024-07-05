import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Carousel = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="carousel">
      <h2>Mes Projets</h2>
      <div className="carousel-images">
        <div className="carousel-item" onClick={() => handleNavigation('/projet/booki')}>
          <img src="/path/to/Booki.png" alt="Booki" />
          <p>Booki</p>
        </div>
        <div className="carousel-item" onClick={() => handleNavigation('/projet/kasa')}>
          <img src="/path/to/Kasa.png" alt="Kasa" />
          <p>Kasa</p>
        </div>
        <div className="carousel-item" onClick={() => handleNavigation('/projet/ocr')}>
          <img src="/path/to/projet_ocr.jpg" alt="Projet OCR" />
          <p>Projet OCR</p>
        </div>
        <div className="carousel-item" onClick={() => handleNavigation('/projet/pro')}>
          <img src="/path/to/projets_pro.jpg" alt="Projets Pro" />
          <p>Projets Pro</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
