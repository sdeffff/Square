import SectionHeader from "../../components/SectionHeader";
import SectionTitle from "../../components/SectionTitle";
import WorksList from "../../components/works-components/WorksList";
import WorksFooter from "../../components/service-components/ServiceFooter";

import worksBg from "../../assets/why_us.png";

import transition from "../transition";

import "./works.css"

const Works = () => {
    return (
        <section>
            <SectionHeader
            title="Our Works"
            txt="
            Discover a portfolio of visually stunning and strategically crafted 
            digital projects that showcase our creativity and expertise."
            img={worksBg}></SectionHeader>

            <SectionTitle
            heading="At SquareUp"
            txt="
            We have had the privilege of working with a diverse range of clients and delivering 
            exceptional digital products that drive success."
            span="Here are five examples of our notable works:"></SectionTitle>

            <WorksList />

            <WorksFooter 
            title="Let us Bring your Ideas to Life in the Digital World."
            txt="
            No matter which services you choose, we are committed to delivering exceptional 
            results that exceed your expectations. Our multidisciplinary team works closely 
            together to ensure seamless collaboration and a unified vision for your digital product."></WorksFooter>
        </section>
    )
}

export default transition(Works);