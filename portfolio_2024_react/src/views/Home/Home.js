import React from 'react';
import Nav from '../../components/Nav/Nav';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import '../../App.css';

const Home = () => {
    return (
        <div>
            <Nav />
            <Carousel />
            <Footer />
        </div>
    );
};

export default Home;