import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//For lazy loading of elements
import { lazy, Suspense } from 'react';

// Page components:
import Home from './pages/home/Home';
const Services = lazy(() => import("./pages/services/Services"));
const Work = lazy(() => import("./pages/works/Works"));
const Process = lazy(() => import('./pages/process/Process'));
const About = lazy(() => import('./pages/about/About'));
const Career = lazy(() => import('./pages/carrer/Career'));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

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
            <Route path='services' element={<Suspense fallback="..."><Services /></Suspense>} />
            <Route path='works' element={<Suspense fallback="..."><Work /></Suspense>} />
            <Route path='process' element={<Suspense fallback="..."><Process /></Suspense>} />
            <Route path='about' element={<Suspense fallback="..."><About /></Suspense>} />
            <Route path='career' element={<Suspense fallback="..."><Career /></Suspense>} />

            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

export default App;