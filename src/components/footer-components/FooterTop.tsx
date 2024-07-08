import SocialMedias from "./SocialMedias";

import logo from "../../assets/logo.svg";

const FooterTop = () => {
    return (
        <div className="flex flex-col items-start gap-10 md:flex-row justify-between w-full pb-12">
            <a href="#" className="flex items-center gap-2">
                <img src={logo} alt="" className="w-10 h-10 sm:w-[70px] sm:h-[70px]" />

                <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold cursor-[var(--cursorPointer)]">Square Up</h1>
            </a>

            <SocialMedias></SocialMedias>
        </div>
    )
}

export default FooterTop;