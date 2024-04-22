import { useState } from 'react'
import Home from './pages/home/Home'
import Services from './pages/services/Services'

import Preloader from './components/Preloader'

import NavBar from './components/header-components/NavBar'
import Footer from './components/home-components/footer-components/Footer'
import { Routes, Route } from 'react-router-dom'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {

  return (
    <>
  <Preloader></Preloader>

  <NavBar></NavBar>

    {/* w-[99.75rem] */}
    <div className='bg-[#191919] mt-32 2xl:px-32 xl:px-20 md:px-3'>
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='services' element={<Services />}></Route>
        </Routes>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
