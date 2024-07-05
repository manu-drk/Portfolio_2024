import React, { useState, useEffect } from 'react';
import '../../App.css';

const CurriculumVitae = ({ data, currentIndex }) => {
    return (
        <div>
            {/* Votre JSX pour afficher les données du CV */}
            {data && data.length > 0 && (
                <div>
                    <h2>{data[currentIndex].title}</h2>
                    <p>{data[currentIndex].description}</p>
                </div>
            )}
        </div>
    );
};

const CurriculumVitaeContainer = () => {
    const [currentIndexCv, setCurrentIndexCv] = useState(0);
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        loadCvCarouselData();
    }, []);

    function loadCvCarouselData() {
        fetch('/assets/datas/cv.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(carouselData => {
                console.log('CV data loaded:', carouselData);
                setCarouselData(carouselData);
            })
            .catch(error => console.error('Error fetching CV carousel data:', error));
    }

    function moveCvCarousel(direction) {
        const totalItems = carouselData.length;
        setCurrentIndexCv((prevIndex) => (prevIndex + direction + totalItems) % totalItems);
    }

    return (
        <div className="App">
            <CurriculumVitae data={carouselData} currentIndex={currentIndexCv} />
            <div className="carousel-nav-left" onClick={() => moveCvCarousel(-1)}>Left</div>
            <div className="carousel-nav-right" onClick={() => moveCvCarousel(1)}>Right</div>
        </div>
    );
}

export default CurriculumVitaeContainer;
