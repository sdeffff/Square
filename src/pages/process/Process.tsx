import transition from "../transition";

import SectionHeader from "../../components/SectionHeader";
import SectionTitle from "../../components/SectionTitle";
import ProcessList from "../../components/process-components/ProcessList";
import ThanksMain from "../../components/home-components/thanks-components/ThanksMain";
import ServiceFooter from "../../components/service-components/ServiceFooter";

import processBg from "../../assets/question-bg.png";

import "../../components/home-components/thanks-components/thanks.css";

const Process = () => {
    return (
        <section>
            <SectionHeader 
            img={processBg}
            txt="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
            title="Process of Starting the Project"
            />

            <SectionTitle 
            heading="At SquareUp"
            txt="
            We follow a structured and collaborative process to ensure the successful 
            delivery of exceptional digital products. Our process combines industry best 
            practices, creative thinking, and a client-centric approach."
            span="Here's an overview of our typical process:"
            />

            <ProcessList />

            <div className="border-x border-grey15">
                <ServiceFooter 
                title="Thank you for your Interest in SquareUp."
                txt="
                We would love to hear from you and discuss how we can help bring your digital 
                ideas to life. Here are the different ways you can get in touch with us."/>
                
                <ThanksMain />
            </div>
        </section>
    )
}

export default transition(Process);