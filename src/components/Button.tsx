import React from "react";

const Button = ({ txt }:any) => {
    return (
        <button className="text-[1.05rem] barlow-medium bg-green50 text-black rounded px-[1.5rem] py-4 my-5 duration-200 ease-in hover:bg-green70"> {txt} </button>
    )
}

export default Button;