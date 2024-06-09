import transition from "../transition";

import SectionHeader from "../../components/SectionHeader";
import SectionTitle from "../../components/SectionTitle";

import CareerList from "../../components/career-components/CareerList";
import JobMain from "../../components/career-components/JobMain";
import JobFooter from "../../components/career-components/JobFooter";

import careerBg from "../../assets/question-bg.png"

import "../../pages/carrer/career.css";

const Career = () => {
    return (
        <section className="career">
            <SectionHeader
            title="Join Our Team at SquareUp"
            txt="Unlock your potential and join our team of innovators and problem solvers."
            img={careerBg} />

            <SectionTitle 
            heading="Welcome to SquareUp, where talent meets opportunity!"
            txt="At SquareUp, we believe that the success of our agency lies in the talent, passion, 
            and dedication of our team members. We are a digital product agency that thrives on 
            innovation, creativity, and collaboration. If you're ready to make a difference and 
            contribute to cutting-edge projects, we invite you to explore career opportunities with us."
            span="Why Work at SquareUp?"/>

            <CareerList></CareerList>

            <SectionTitle 
            heading="Current Openings"
            txt="We are always on the lookout for talented individuals who are passionate 
            about creating exceptional digital experiences. Whether you're a designer, engineer, 
            project manager, or have skills that align with our agency's mission, we encourage you 
            to explore our open positions."
            span=""/>

            <JobMain />

            <JobFooter />
        </section>
    )
}

export default transition(Career);