import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//For lazy loading of elements
import { lazy, Suspense } from 'react';

// Page components:
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Works from './pages/Works/Works';
import Process from "./pages/Process/Process";
import About from './pages/About/About';
import Career from './pages/Carrer/Career';
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// Elements:
import NavBar from './components/header-components/NavBar';
import Footer from './components/footer-components/Footer';
import MobileFooter from './components/mobile/MobileFooter';
import Preloader from './components/preloader-components/Preloader';

import "./styles/base.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Preloader />
      <NavBar />
      <div className='main-container bg-[#191919] mt-24 md:mt-20 2xl:px-32 xl:px-20 md:px-3' data-scroll-container>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/Square/' element={<Home />} />
            <Route path='/Square/services' element={<Services />} />
            <Route path='/Square/works' element={<Works />} />
            <Route path='/Square/process' element={<Process />} />
            <Route path='/Square/about' element={<About />} />
            <Route path='/Square/career' element={<Career />} />

            <Route path='/*' element={<Suspense><PageNotFound /></Suspense>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}

export default App;
