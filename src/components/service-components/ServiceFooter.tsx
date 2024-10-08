import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import thankBg from "../../assets/thank-bg.webp";
import thankLogo from "../../assets/ThankLogo.svg";

type Props = {
    title: string,
    txt: string,
}

const ServiceFooter = (props: Props) => {
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if(timeoutRef.current) clearTimeout(timeoutRef.current);
        }
    }, [])

    const handleScroll = () => {
        timeoutRef.current = setTimeout(() => {
            window.scrollTo(0, 4550);
        }, 730)
    }

    //When the Link is clicked set window.scrollY to the Thanks section on main page

    return (
        <div className="relative border-x border-grey15">
            <img src={thankBg} alt="" />

            <div className="flex flex-col items-center gap-2 md:gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-fit">
                <img src={thankLogo} className="w-10 h-10 sm:w-16 sm:h-16 md:w-18 md:h-18" alt="" />

                <article className="text-white text-center flex flex-col w-full lg:w-[56rem]">
                    <h1 className="barlow-semibold text-base sm:text-lg md:text-xl">{props.title}</h1>

                    <p className="barlow-light hidden lg:block">{props.txt}</p>
                </article>

                <Link to={"/Square/"} onClick={handleScroll}>
                    <button className="common-button text-sm sm:text-base md:text-[1.05rem] barlow-medium bg-green50 text-black rounded px-2 py-3 sm:px-[1.5rem] sm:py-4 duration-200 ease-in hover:bg-green70"><p>Start Project</p></button>
                </Link>
            </div>
        </div>
    )
}

export default ServiceFooter;