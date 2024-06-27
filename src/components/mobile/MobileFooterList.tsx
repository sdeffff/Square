import MobileFooterEl from "./MobileFooterEl";

import homeIcon from "../../assets/home.svg";
import serviceIcon from "../../assets/services-icon.svg";
import workIcon from "../../assets/works.svg";
import processIcon from "../../assets/process.svg";
import aboutIcon from "../../assets/about-icon.svg";
import careerIcon from "../../assets/careers.svg";

const MobileFooterList = () => {
    return (
        <ul className="flex w-full justify-evenly items-center">
            <MobileFooterEl
            icon={homeIcon}
            page="/"></MobileFooterEl>
            <MobileFooterEl
            icon={serviceIcon}
            page="/services"></MobileFooterEl>
            <MobileFooterEl
            icon={workIcon}
            page="/works"></MobileFooterEl>
            <MobileFooterEl
            icon={processIcon}
            page="/process"></MobileFooterEl>
            <MobileFooterEl
            icon={aboutIcon}
            page="/about"></MobileFooterEl>
            <MobileFooterEl
            icon={careerIcon}
            page="/career"></MobileFooterEl>
        </ul>
    )
}

export default MobileFooterList;