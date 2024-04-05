import React from "react";

type Props = {
    src: string;
    imgSrc: string;
}

const Company = (props: Props) => {
    return (
        <li className="py-2 px-7"><a href={`https://${props.src}`} target="_blank"><img src={props.imgSrc} loading="lazy" className="xl:w-32 xl:h-12 lg:w-28 lg:h-11 pointer-events-none" /></a></li>
    )
}

export default Company;