import React from 'react';

import Hero from '../../components/home-components/hero-components/Hero';
import Companies from '../../components/home-components/hero-components/Companies';
import Services from '../../components/home-components/services-components/Services';
import WhyUs from '../../components/home-components/whyus-components/WhyUs';
import Clients from '../../components/home-components/clients-components/Clients';
import QA from '../../components/home-components/Q&A/QA';
import Thanks from '../../components/home-components/thanks-components/Thanks';

import "./home.css";
const Home = () => {
    return (
        <>
            <Hero></Hero>

            <Services></Services>

            <WhyUs></WhyUs>

            <Clients></Clients>

            <QA></QA>

            <Thanks></Thanks>
        </>
    )
}

export default Home;