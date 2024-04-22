import SectionHeader from "../../components/SectionHeader";
import Design from "../../components/service-components/design-components/Design";

import serviceBg from "../../assets/services.png";

const Services = () => {
    return (
        <>
            <SectionHeader
            title="Our Services"
            txt="Transform your brand with our innovative digital solutions that captivate and engage your audience."
            img={serviceBg}></SectionHeader>

            <Design></Design>
        </>
    )
}   

export default Services;