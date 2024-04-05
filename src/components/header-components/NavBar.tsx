import React, { useEffect, useRef } from "react";
import Button from "../Button";
import Navigation from "./Navigation";

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

    return (
        <header ref={headerRef} className="fixed z-50 w-full top-0 bg-[#191919] text-white flex justify-between items-center border-b-2 border-[#262626] 2xl:px-32 xl:px-20 md:px-3 py-4 duration-[250ms]">
            <a href="#" className="flex items-center justify-center gap-3 text-[1.5rem] font-bold">
                <img src={logoImg} alt="" loading="lazy" />

                <h1 className="lg:block md:hidden">Square Up</h1>
            </a>

            <Navigation></Navigation>

            <Button 
            link="#startProject"
            txt={"Contact Us"}></Button>
        </header>
    )
}

export default NavBar;