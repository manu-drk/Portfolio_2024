import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import CurriculumVitae from './views/CurriculumVitae/CurriculumVitae';
import OpenClassRoom from './views/OpenClassRoom/OcrCarouselPage';
import Presentation from './views/Presentation/Presentation';
import Professionels from './views/Professionels/Professionels';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
        <Route path="/open-class-room" element={<OpenClassRoom />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/professionels" element={<Professionels />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
