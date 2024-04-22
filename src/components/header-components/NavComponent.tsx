import React from "react";

import { Link } from "react-router-dom";

type Props = {
    page: string,
    txt: string,
};

const NavComponent = (props: Props) => {
    return (
        <li><Link to={props.page} className="duration-200 ease-in py-4 px-6 rounded-lg hover:bg-[#26262634] focus:bg-grey15 xl:text-lg md:text-base">{props.txt}</Link></li>
    )
}

export default NavComponent;