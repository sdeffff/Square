import SectionHeader from "../ServiceHeader";
import DesignMain from "./DesignMain";

const Design = () => {
    return (
        <section className="">
            <SectionHeader
            heading="Design"
            txt="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. "
            service="Our design services include:"></SectionHeader>

            <DesignMain></DesignMain>
        </section>
    )
}

export default Design;