import Hero from '../../components/home-components/hero-components/Hero';
import Services from '../../components/home-components/services-components/Services';
import WhyUs from '../../components/home-components/whyus-components/WhyUs';
import Clients from '../../components/home-components/clients-components/Clients';
import QA from '../../components/home-components/Q&A/QA';
import Thanks from '../../components/home-components/thanks-components/Thanks';

import transition from '../transition';

import "./home.css";

const Home = () => {
    return (
        <section>
            <Hero />
            <Services />
            <WhyUs />
            <Clients />
            <QA />
            <Thanks />
        </section>
    );
}

export default transition(Home);