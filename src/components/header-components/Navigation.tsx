import React from "react";

import NavComponent from "./NavComponent";

const Navigation = () => {
    return (
        <ul className="flex text-[1.1rem] font-normal gap-1 barlow-normal">
            <NavComponent page="/" txt="Home"></NavComponent>
            <NavComponent page="/" txt="Services"></NavComponent>
            <NavComponent page="/" txt="Work"></NavComponent>
            <NavComponent page="/" txt="Process"></NavComponent>
            <NavComponent page="/" txt="About"></NavComponent>
            <NavComponent page="/" txt="Careers"></NavComponent>
        </ul>
    )
}

export default Navigation;