import DesignServices from "./DesignServices";

import icon1 from "../../../assets/design-icon1.svg";
import icon2 from "../../../assets/design-icon2.svg";
import icon3 from "../../../assets/design-icon3.svg";
import icon4 from "../../../assets/design-icon4.svg";
import icon5 from "../../../assets/design-icon5.svg";
import icon6 from "../../../assets/design-icon6.svg";
import icon7 from "../../../assets/design-icon7.svg";
import icon8 from "../../../assets/design-icon8.svg";

const DesignMain = () => {
    return (
        <section className="border-x-[0.5px] border-grey15">
            <DesignServices
                title="User Experience (UX) Design"
                img1={icon1}
                txt1="User Research and Persona Development"
                img2={icon2}
                txt2="Information Architecture and Wireframing"
                img3={icon3}
                txt3="Interactive Prototyping and User Testing"
                img4={icon4}
                txt4="UI Design and Visual Branding"></DesignServices>

            <DesignServices
                title="User Interface (UI) Design"
                img1={icon5}
                txt1="User Research and Persona Development"
                img2={icon6}
                txt2="Information Architecture and Wireframing"
                img3={icon3}
                txt3="Interactive Prototyping and User Testing"
                img4={icon4}
                txt4="UI Design and Visual Branding"></DesignServices>

            <DesignServices
                title="Branding and Identity"
                img1={icon7}
                txt1="Logo Design and Visual Identity Development"
                img2={icon8}
                txt2="Brand Strategy and Positioning"
                img3={icon3}
                txt3="Brand Guidelines and Style Guides"
                img4={icon4}
                txt4="Marketing Collateral Design (Brochures, Business Cards, etc.)"></DesignServices>
        </section>
    )
}

export default DesignMain;