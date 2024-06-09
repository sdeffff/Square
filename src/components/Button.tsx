import { memo } from "react";

import "../styles/buttons.css";

type Props = {
    txt: string,
    link: string,
}

const Button = (props: Props) => {
    return (
        <a href={props.link}><button className="common-button xl:text-[1.05rem] lg:text-base sm:text-sm barlow-medium bg-green50 text-black rounded px-[1.5rem] py-4 my-5 duration-200 ease-in hover:bg-green70"> <p>{props.txt}</p> </button></a>
    )
}

export default memo(Button);