import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Carousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { path: '/curriculum-vitae', imgSrc: '/assets/images/cv.jpg', alt: 'Curriculum Vitae', title: 'Curriculum Vitae' },
    { path: '/presentation', imgSrc: '/assets/images/presentation.jpg', alt: 'Presentation', title: 'Présentation' },
    { path: '/open-class-room', imgSrc: '/assets/images/projet_ocr.jpg', alt: 'Projet OCR', title: 'Projet OCR' },
    { path: '/professionels', imgSrc: '/assets/images/projets_pro.jpg', alt: 'Projets Pro', title: 'Projets Pro' },
    { path: '/contact', imgSrc: '/assets/images/Me_contacter.jpg', alt: 'Contact', title: 'Contact' },
  ];

  useEffect(() => {
    showCarouselItem(currentIndex);
  }, [currentIndex]);

  const showCarouselItem = (index) => {
    const totalItems = items.length;
    const elements = document.querySelectorAll('.carousel-item');
    elements.forEach((item, i) => {
      const pos = (i - index + totalItems) % totalItems;
      switch (pos) {
        case 0:
          item.style.transform = 'translateX(-300px) scale(0.8)';
          item.style.opacity = '0.8';
          item.style.zIndex = 2;
          item.onclick = () => moveCarousel(-1);
          break;
        case 1:
          item.style.transform = 'translateX(0px) scale(1)';
          item.style.opacity = '1';
          item.style.zIndex = 3;
          item.onclick = () => handleNavigation(item.getAttribute('data-link'));
          break;
        case 2:
          item.style.transform = 'translateX(300px) scale(0.8)';
          item.style.opacity = '0.8';
          item.style.zIndex = 2;
          item.onclick = () => moveCarousel(1);
          break;
        default:
          item.style.transform = 'translateX(0px) scale(0.4)';
          item.style.opacity = '0.4';
          item.style.zIndex = 0;
          item.onclick = null;
          break;
      }
    });
  };

  const moveCarousel = (direction) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + items.length) % items.length);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="carousel">
      <h2>Mes Projets</h2>
      <div className="carousel-images">
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
            data-link={item.path}
            style={{
              transform: index === currentIndex ? 'translateX(0px) scale(1)' : index === (currentIndex - 1 + items.length) % items.length ? 'translateX(-300px) scale(0.8)' : 'translateX(300px) scale(0.8)',
              opacity: index === currentIndex ? 1 : 0.8,
              zIndex: index === currentIndex ? 3 : 2,
              cursor: 'pointer'
            }}
            onClick={() => handleNavigation(item.path)}
          >
            <img src={item.imgSrc} alt={item.alt} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={() => moveCarousel(-1)}>Previous</button>
        <button onClick={() => moveCarousel(1)}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
