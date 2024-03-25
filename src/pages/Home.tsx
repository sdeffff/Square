import React from 'react';

import Hero from '../components/hero-components/Hero';
import Companies from '../components/hero-components/Companies';
import Services from '../components/services-components/Services';

import "./home.css";
const Home = () => {
    return (
        <>
            <Hero></Hero>

            <Services></Services>
        </>
    )
}

export default Home;