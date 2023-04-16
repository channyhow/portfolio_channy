import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.scss';
// import { DarkModeSwitch } from 'react-toggle-dark-mode';
// import components
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Footer from '../Footer';

function App() {
  return (
  // <BrowserRouter>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  // </BrowserRouter>
  );
}

export default App;
