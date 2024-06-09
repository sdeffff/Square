import whyUsBg from "./../../../assets/why_us.png";
import SectionHeader from "../../SectionHeader";

import CardGrid from "./CardGrid";

const WhyUs = () => {
    return (
        <section>
            <SectionHeader
                img={whyUsBg}
                title="Why Choose SquareUp?"
                txt="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.">
            </SectionHeader>  

            <CardGrid></CardGrid>          
        </section>
    )
}

export default WhyUs;