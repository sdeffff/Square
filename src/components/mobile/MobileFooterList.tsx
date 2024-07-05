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
            page="/Square/"></MobileFooterEl>
            <MobileFooterEl
            icon={serviceIcon}
            page="/Square/services"></MobileFooterEl>
            <MobileFooterEl
            icon={workIcon}
            page="/Square/works"></MobileFooterEl>
            <MobileFooterEl
            icon={processIcon}
            page="/Square/process"></MobileFooterEl>
            <MobileFooterEl
            icon={aboutIcon}
            page="/Square/about"></MobileFooterEl>
            <MobileFooterEl
            icon={careerIcon}
            page="/Square/career"></MobileFooterEl>
        </ul>
    )
}

export default MobileFooterList;