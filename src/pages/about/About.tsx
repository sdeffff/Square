import transition from '../transition';

import SectionHeader from '../../components/SectionHeader';

import AboutHeader from '../../components/about-components/AboutHeader';
import AboutMain from '../../components/about-components/AboutMain';

import aboutBg from "../../assets/services.png";

const About = () => {
    return (
        <section className='border-x border-grey15'>
            <SectionHeader
            title='About Us'
            txt='
            Welcome to SquareUp, where collaboration, expertise, and client-centricity 
            intersect to shape the future of digital innovation.'
            img={aboutBg} />

            <AboutHeader />

            <AboutMain />
        </section>
    )
}

export default transition(About);