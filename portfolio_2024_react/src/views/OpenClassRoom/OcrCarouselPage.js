import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import '../../App.css';

const OcrCarouselPage = () => {
  const [ocrData, setOcrData] = useState([]);

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
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <div className="OcrCarouselPage">
      <h1>OCR Carousel Page</h1>
      {ocrData.length > 0 && (
        <Carousel title="OCR Carousel" data={ocrData} />
      )}
    </div>
  );
};

export default OcrCarouselPage;