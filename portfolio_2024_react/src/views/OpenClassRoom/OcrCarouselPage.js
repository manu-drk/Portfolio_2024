import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import '../../App.css';
import './OcrCarouselPage.css';

const OcrCarouselPage = () => {
  const [ocrData, setOcrData] = useState([]);
  const [currentIndexOCR, setCurrentIndexOCR] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);
  const [modalContent, setModalContent] = useState([]);
  const [modalType, setModalType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Chargement des données du carousel OCR
    fetch('/assets/datas/ocr.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(carouselData => {
        console.log('OCR data loaded:', carouselData);
        setOcrData(carouselData);
        setCurrentProject(carouselData[0]);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  const moveOCRCarousel = (direction) => {
    const newIndex = (currentIndexOCR + direction + ocrData.length) % ocrData.length;
    setCurrentIndexOCR(newIndex);
    setCurrentProject(ocrData[newIndex]);
  };

  const showModal = (type, content) => {
    setModalType(type);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="OcrCarouselPage">
      <Nav />
      <h1>OCR Carousel Page</h1>
      <div className="carousel-ocr">
        {ocrData.map((item, index) => (
          <div
            key={index}
            className={`carousel-item-ocr ${index === currentIndexOCR ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentIndexOCR + ocrData.length) % ocrData.length * 300}px) scale(${index === currentIndexOCR ? 1 : 0.8})`,
              opacity: index === currentIndexOCR ? 1 : 0.8,
              zIndex: index === currentIndexOCR ? 3 : 2,
            }}
          >
            <img src={item.cover} alt={item.title} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={() => moveOCRCarousel(-1)}>Previous</button>
        <button onClick={() => moveOCRCarousel(1)}>Next</button>
      </div>
      {currentProject && (
        <div className="details-container">
          <h2>{currentProject.title}</h2>
          <div className="links-container">
            {currentProject.Site && <a href={currentProject.Site} target="_blank" rel="noopener noreferrer">Site</a>}
            {currentProject.Github && <a href={currentProject.Github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            <button onClick={() => showModal('description', currentProject.description || [])}>Description</button>
            <button onClick={() => showModal('competence', currentProject.competences || [])}>Compétence</button>
          </div>
          <div className="tags-container">
            {currentProject.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-description">
              {modalContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default OcrCarouselPage;
