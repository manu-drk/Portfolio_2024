import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import '../../App.css';

const Presentation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [presentationData, setPresentationData] = useState([]);

    useEffect(() => {
        const fetchPresentationData = async () => {
            try {
                const response = await fetch('/assets/datas/presentation.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                setPresentationData(data);
            } catch (error) {
                console.error('Error fetching Presentation carousel data:', error);
            }
        };

        fetchPresentationData();
    }, []);

    const showPresentationCarouselItem = (index) => {
        return presentationData.map((item, i) => (
            <div
                key={i}
                className="carousel-item-presentation"
                style={{
                    transform: `translateX(${getPosition(index, i)}px) scale(${getScale(index, i)})`,
                    opacity: getOpacity(index, i),
                    zIndex: getZIndex(index, i)
                }}
                onClick={() => handleItemClick(i)}
            >
                <h2>{item.title}</h2>
                <ul>
                    {item.description.map((desc, j) => (
                        <li key={j}>{desc}</li>
                    ))}
                </ul>
            </div>
        ));
    };

    const movePresentationCarousel = (direction) => {
        setCurrentIndex((prevIndex) => (prevIndex + direction + presentationData.length) % presentationData.length);
    };

    const handleItemClick = (index) => {
        // Handle item click logic here if needed
        goTo(presentationData[index].link, '_self'); // Example function, adjust as needed
    };

    const goTo = (url, target) => {
        if (target === '_blank') {
            window.open(url, '_blank');
        } else {
            window.location.href = url;
        }
    };

    const getPosition = (currentIndex, itemIndex) => {
        const position = (itemIndex - currentIndex + presentationData.length) % presentationData.length;
        switch (position) {
            case 0:
                return -300;
            case 1:
                return 0;
            case 2:
                return 300;
            default:
                return 0;
        }
    };

    const getScale = (currentIndex, itemIndex) => {
        const position = (itemIndex - currentIndex + presentationData.length) % presentationData.length;
        return position === 1 ? 1 : 0.4;
    };

    const getOpacity = (currentIndex, itemIndex) => {
        const position = (itemIndex - currentIndex + presentationData.length) % presentationData.length;
        return position === 1 ? 1 : 0.4;
    };

    const getZIndex = (currentIndex, itemIndex) => {
        const position = (itemIndex - currentIndex + presentationData.length) % presentationData.length;
        return position === 1 ? 3 : 0;
    };

    if (presentationData.length === 0) {
        return <div>Loading...</div>; // Placeholder for loading state if needed
    }

    return (
        <div className="App">
            <div className="carousel-presentation">
            <Nav />
                {showPresentationCarouselItem(currentIndex)}
            </div>
            <div className="carousel-nav-left" onClick={() => movePresentationCarousel(-1)}>Left</div>
            <div className="carousel-nav-right" onClick={() => movePresentationCarousel(1)}>Right</div>
            <Footer />
        </div>
    );
};

export default Presentation;
