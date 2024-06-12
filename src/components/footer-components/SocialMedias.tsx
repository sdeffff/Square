import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

const SocialMedias = () => {
    return (
        <div className="flex items-center gap-5 text-white border-2 border-grey15 pl-4 py-2 pr-2 rounded-lg">
            <h2 className="barlow-regular text-base md:text-lg lg:text-xl">Stay Connected</h2>

            <ul className="flex gap-2">
                <li><a href="https://facebook.com" className=" ease-in-out duration-[250ms] opacity-75 hover:opacity-100 w-11 md:w-14 lg:w-14"><img src={facebook} alt="" className="w-12 md:w-14" /></a></li>
                <li><a href="https://twitter.com" className=" ease-in-out duration-[250ms] opacity-75 hover:opacity-100 w-11 md:w-14"><img src={twitter} alt="" className="w-12 md:w-14" /></a></li>
                <li><a href="https://linkedin.com" className=" ease-in-out duration-[250ms] opacity-75 hover:opacity-100 w-11 md:w-14"><img src={linkedin} alt="" className="w-12 md:w-14"  /></a></li>
            </ul>
        </div>
    )
}

export default SocialMedias;