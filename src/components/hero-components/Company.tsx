import React from "react";

type Props = {
    src: string;
    imgSrc: string;
}

const Company = (props: Props) => {
    return (
        <li className="py-2 px-7"><a href={`https://${props.src}`} target="_blank"><img src={props.imgSrc} className="w-32 h-12" /></a></li>
    )
}

export default Company;