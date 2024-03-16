import React from "react";
import Button from "./../Button";
import Navigation from "./Navigation";

import logoImg from "./../../assets/logo.svg";

const NavBar = () => {
    return (
        <header className="bg-[#191919] text-white flex justify-between items-center border-b-2 border-[#262626] 2xl:px-36 xl:px-20 md:px-3 py-4">
            <a href="#" className="flex items-center justify-center gap-3 text-[1.5rem] font-bold">
                <img src={logoImg} alt="" />

                <h1>Square Up</h1>
            </a>

            <Navigation></Navigation>

            <Button txt={"Contact Us"}></Button>
        </header>
    )
}

export default NavBar;