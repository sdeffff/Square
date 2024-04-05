import React from "react";

type Props = {
    txt: string,
    link: string,
}

const Button = (props: Props) => {
    return (
        <a href={props.link}><button className="text-[1.05rem] barlow-medium bg-green50 text-black rounded px-[1.5rem] py-4 my-5 duration-200 ease-in hover:bg-green70"> {props.txt} </button></a>
    )
}

export default Button;