import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Work from '../../pages/Work';
import Footer from '../Footer';

function App() {
  return (

    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
