import whyUsBg from "./../../../assets/why_us.webp";
import SectionHeader from "../../SectionHeader";

import CardGrid from "./CardGrid";

const WhyUs = () => {
    return (
        <section>
            <SectionHeader
                img={whyUsBg}
                title="Why Choose SquareUp?"
                txt="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results." />

            <CardGrid />       
        </section>
    )
}

export default WhyUs;