import Button from "../Button";

import { Link } from "react-router-dom";

import thankBg from "../../assets/thank-bg.png";
import thankLogo from "../../assets/ThankLogo.svg";

type Props = {
    title: string,
    txt: string,
}

const ServiceFooter = (props: Props) => {
    //When the Link is clicked set window.scrollY to the Thanks section on main page
    const handleScroll = () => {
        setTimeout(() => {
            window.scrollTo(0, 4550);
        }, 750)
    }

    return (
        <div className="relative">
            <img src={thankBg} alt="" />

            <div className="flex flex-col items-center gap-10 md:gap-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src={thankLogo} className="xl:w-20 md:w-16 xl:h-20 md:h-16" alt="" />

                <article className="text-white text-center flex flex-col gap-3 w-[56rem]">
                    <h1 className="barlow-semibold text-4xl">{props.title}</h1>

                    <p className="barlow-light">{props.txt}</p>
                </article>

                <Link to={"/"} onClick={handleScroll}>
                    <button className="common-button xl:text-[1.05rem] lg:text-base sm:text-sm barlow-medium bg-green50 text-black rounded px-[1.5rem] py-4 my-5 duration-200 ease-in hover:bg-green70"><p>Start Project</p></button>
                </Link>
            </div>
        </div>
    )
}

export default ServiceFooter;