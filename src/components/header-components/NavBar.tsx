import { useEffect, useRef, memo } from "react";
import Navigation from "./Navigation";

import { Link } from "react-router-dom";

import "../../styles/buttons.css";

import logoImg from "./../../assets/logo.svg";

const NavBar = () => {
    const headerRef = useRef<HTMLElement>(null);

    //decreasing height of navbar when scrolling
    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;

            if(header) {
                if(window.scrollY >= 20) header.className = header.className.replace("py-4", "py-1");
                else header.className = header.className.replace("py-1", "py-4");
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    //Setting position of window of the page by clicking on the logo
    const handleScroll = () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 140);
    }

    return (
        <>
            <header ref={headerRef} className="fixed z-40 w-full top-0 bg-[#191919] text-white flex justify-between items-center border-b-2 border-[#262626] 2xl:px-32 xl:px-20 md:px-3 sm:px-4 py-4 duration-[250ms]">
                <Link to="/" onClick={handleScroll}>
                    <a href="#" className="flex items-center justify-center gap-3 text-[1.5rem] font-bold">
                        <img src={logoImg} alt="" loading="lazy" />

                        <h1 className="lg:block sm:hidden cursor-[var(--cursorPointer)]">Square Up</h1>
                    </a>
                </Link>

                <Navigation></Navigation>

                <button 
                name="contact"
                className="common-button relative xl:text-[1.05rem] md:text-base sm:text-sm barlow-medium bg-green50 text-black rounded px-[1.5rem] py-4 my-5 duration-200 ease-in hover:bg-green70"><p>Contact Us</p></button>
            </header>
        </>
    )
}

export default memo(NavBar);