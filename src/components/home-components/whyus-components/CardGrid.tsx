import Card from "./Card";

import Expertise from "./../../../assets/Expertise.svg";
import CCA from "./../../../assets/CCA.svg";
import CP from "./../../../assets/CP.svg";
import RDS from "./../../../assets/RDS.svg";

const CardGrid = () => {
    return (
        <ul className="md:grid md:grid-cols-2 border-[0.5px] border-grey15">
            <Card
                img={Expertise}
                title="Expertise"
                txt="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."></Card>
            <Card
                img={CCA}
                title="Client-Centric Approach"
                txt="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."></Card>
            <Card
                img={RDS}
                title="Results-Driven Solutions"
                txt="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."></Card>
            <Card
                img={CP}
                title="Collaborative Partnership"
                txt="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."></Card>
        </ul>
    )
}

export default CardGrid;