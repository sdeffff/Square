import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//For lazy loading of elements
import { lazy, Suspense } from 'react';

// Page components:
import Home from './pages/Home/Home';
const Services = lazy(() => import("./pages/Services/Services"));
const Work = lazy(() => import("./pages/Works/Works"));
import Process from "./pages/Process/Process";
const About = lazy(() => import('./pages/About/About'));
const Career = lazy(() => import('./pages/Carrer/Career'));
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
      <div className='main-container bg-[#191919] mt-20 2xl:px-32 xl:px-20 md:px-3' data-scroll-container>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/Square/' element={<Home />} />
            <Route path='/Square/services' element={<Suspense><Services /></Suspense>} />
            <Route path='/Square/works' element={<Suspense fallback="..."><Work /></Suspense>} />
            <Route path='/Square/process' element={<Process />} />
            <Route path='/Square/about' element={<Suspense fallback="..."><About /></Suspense>} />
            <Route path='/Square/career' element={<Suspense fallback="..."><Career /></Suspense>} />

            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
}

export default App;
