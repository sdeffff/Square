import SectionHeader from "../../components/SectionHeader";
import Design from "../../components/service-components/design-components/Design";
import PM from "../../components/service-components/PM-components/PM";
import ServiceFooter from "../../components/service-components/ServiceFooter";

import serviceBg from "../../assets/services.png";

import transition from "../transition";

const Services = () => {
    return (
        <section>
            <SectionHeader
            title="Our Services"
            txt="
            Transform your brand with our innovative digital solutions 
            that captivate and engage your audience."
            img={serviceBg}></SectionHeader>

            <Design />
            <PM />
            <ServiceFooter
            title="Let us Bring your Ideas to Life in the Digital World."
            txt="
            No matter which services you choose, we are committed to delivering 
            exceptional results that exceed your expectations. Our multidisciplinary 
            team works closely together to ensure seamless collaboration and a unified
            vision for your digital product."></ServiceFooter>
        </section>
    )
}   

export default transition(Services);