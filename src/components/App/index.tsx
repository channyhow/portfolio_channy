import React from 'react';
import './styles.scss';
import Navbar from '../Navbar';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
