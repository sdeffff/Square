import serviceBg from "./../../../assets/services.png";

import CardList from "./CardList";
import SectionHeader from "../../SectionHeader";

const Services = () => {

    return (
        <section>   
            <SectionHeader
                img={serviceBg}
                title="Our Services"
                txt="Transform your brand with our innovative digital solutions that captivate and engage your audience."></SectionHeader>

            <CardList></CardList>
        </section>
    )
}

export default Services;    