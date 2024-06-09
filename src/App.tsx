import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Page components:
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import PageNotFound from './pages/PageNotFound';
import Work from "./pages/works/Works";
import Process from './pages/process/Process';
import About from './pages/about/About';
import Career from './pages/carrer/Career';

// Elements:
import NavBar from './components/header-components/NavBar';
import Footer from './components/footer-components/Footer';
import Preloader from './components/Preloader';

import "./styles/base.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Preloader />
      <NavBar />
      <div className='main-container bg-[#191919] mt-32 2xl:px-32 xl:px-20 md:px-3' data-scroll-container>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='services' element={<Services />} />
            <Route path='works' element={<Work />} />
            <Route path='process' element={<Process />} />
            <Route path='about' element={<About />} />
            <Route path='career' element={<Career />} />

            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

export default App;
