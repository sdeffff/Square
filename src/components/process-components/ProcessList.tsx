import SectionCard from "../SectionCard";

const ProcessList = () => {
    return (
        <ul className="process-list grid grid-cols-2">
            <SectionCard 
            number="01"
            name="Discovery"
            txt="
            We begin by thoroughly understanding your business goals, 
            target audience, and project requirements. We conduct in-depth 
            research to gather insights and define project objectives, allowing 
            us to develop a tailored strategy."/>
            <SectionCard 
            number="02"
            name="Planning and Strategy"
            txt="
            Based on the gathered information, we create a comprehensive project plan and 
            strategy. This includes defining project milestones, timelines, deliverables, 
            and resource allocation. We collaborate closely with you to align our strategy 
            with your vision."/>
            <SectionCard 
            number="03"
            name="Design"
            txt="
            Our expert designers translate the project requirements into captivating visual designs. 
            We create wireframes, mockups, and interactive prototypes to showcase the user interface, 
            user experience, and overall design aesthetics. We iterate on the designs based on your 
            feedback until we achieve the perfect look and feel."/>
            <SectionCard 
            number="04"
            name="Development"
            txt="
            Once the designs are approved, our skilled development team brings them to life. 
            We use cutting-edge technologies and coding best practices to build robust and scalable 
            digital products. Throughout the development phase, we maintain open lines of communication 
            to keep you updated on progress and address any questions or concerns."/>
            <SectionCard 
            number="05"
            name="Testing and Quality Assurance"
            txt="
            We conduct rigorous testing to ensure that your digital product functions flawlessly 
            across different devices, browsers, and operating systems. Our quality assurance team 
            meticulously checks for bugs, usability issues, and performance bottlenecks. We strive 
            for a seamless user experience and a high level of reliability."/>
            <SectionCard 
            number="06"
            name="Deployment and Launch"
            txt="
            When your digital product is thoroughly tested and meets your satisfaction, 
            we prepare for deployment. We handle all the technical aspects of launching your 
            product, ensuring a smooth transition from development to the live environment. 
            We assist with setting up hosting, configuring servers, and managing any required 
            integrations."/>
        </ul>
    )
}

export default ProcessList;