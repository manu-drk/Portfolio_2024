import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import '../../App.css';
import './Professionels.css'

function Professionals() {
    const [carouselData, setCarouselData] = useState([]);
    const [currentIndexPro, setCurrentIndexPro] = useState(0);

    useEffect(() => {
        loadProCarousel();
    }, []);

    function loadProCarousel() {
        fetch('/assets/datas/pro.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(carouselData => {
                console.log('Pro data loaded:', carouselData);
                setCarouselData(carouselData);
            })
            .catch(error => console.error('Error fetching Pro carousel data:', error));
    }

    function showProCarouselItem(index) {
        setCurrentIndexPro(index);
    }

    function moveProCarousel(direction) {
        const totalItems = carouselData.length;
        setCurrentIndexPro((currentIndexPro + direction + totalItems) % totalItems);
    }

    if (!carouselData || carouselData.length === 0) {
        return <div className="carousel-pro">Loading...</div>;
    }

    return (
        <div className="professionals-page">
            <Nav />
            <div className="carousel-pro">
                {carouselData.map((item, index) => (
                    <div key={index} className={`carousel-item-pro ${index === currentIndexPro ? 'active' : ''}`}>
                        <img src={item.cover} alt="Cover" />
                        <div className="details-container">
                            <div className="links-container">
                                <a href={item.Site} target="_blank" rel="noopener noreferrer">Site</a>
                                <a href={item.Github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                            <div className="tags-container">
                                {item.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="carousel-nav">
                    <button className="carousel-nav-left" onClick={() => moveProCarousel(-1)}>Previous</button>
                    <button className="carousel-nav-right" onClick={() => moveProCarousel(1)}>Next</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Professionals;
