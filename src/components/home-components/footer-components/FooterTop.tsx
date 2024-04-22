import SocialMedias from "./SocialMedias";

import logo from "../../../assets/logo.svg";

const FooterTop = () => {
    return (
        <div className="flex justify-between w-full pb-12">
            <a href="#" className="flex items-center gap-2">
                <img src={logo} alt="" />

                <h1 className="text-white text-2xl font-bold cursor-[var(--cursorPointer)]">Square Up</h1>
            </a>

            <SocialMedias></SocialMedias>
        </div>
    )
}

export default FooterTop;