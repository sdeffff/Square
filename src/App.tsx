import { useState } from 'react'
import Home from './pages/home/Home'
import NavBar from './components/header-components/NavBar'
import { Routes, Route } from 'react-router-dom'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {

  return (
    <>
  <NavBar></NavBar>
    
    {/* w-[99.75rem] */}
    <div className='bg-[#191919] 2xl:px-32 xl:px-20 md:px-3'>
        <Routes>
              <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
