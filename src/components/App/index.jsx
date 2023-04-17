import React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import './styles.scss';
// import components
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Work from '../../pages/Work';
import Footer from '../Footer';

function App() {
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //     color: '#feefdd',
  //   },
  // });
  return (
  // <ThemeProvider theme={darkTheme}>
  //   <CssBaseline />
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />

    </div>
  // {/* </ThemeProvider> */}
  );
}

export default App;
