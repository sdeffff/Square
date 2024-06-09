import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

const SocialMedias = () => {
    return (
        <div className="flex items-center gap-5 text-white border-2 border-grey15 pl-4 py-2 pr-2 rounded-lg">
            <h2 className="barlow-regular lg:text-xl md:text-base">Stay Connected</h2>

            <ul className="flex gap-3">
                <li><a href="https://facebook.com" className="lg:w-13 lg:h-13 ease-in-out duration-[250ms] opacity-75 hover:opacity-100 md:w-11 md:h-11"><img src={facebook} alt="" className="lg:w-13 lg:h-13" /></a></li>
                <li><a href="https://twitter.com" className="lg:w-13 lg:h-13 ease-in-out duration-[250ms] opacity-75 hover:opacity-100 md:w-11 md:h-11"><img src={twitter} alt="" className="lg:w-13 lg:h-13" /></a></li>
                <li><a href="https://linkedin.com" className="lg:w-13 lg:h-13 ease-in-out duration-[250ms] opacity-75 hover:opacity-100 md:w-11 md:h-11"><img src={linkedin} alt="" className="lg:w-13 lg:h-13"  /></a></li>
            </ul>
        </div>
    )
}

export default SocialMedias;