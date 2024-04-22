import { useEffect, useRef } from "react";

type Props = {
    name: string,
    type: string,
    width: string,
}

const PopUpField = (props: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.style.width = props.width;
        }
    })

    return (
        <li>
            <input ref={inputRef} type={props.type} placeholder={props.name} required
            className="barlow-regular border-b-2 pt-1 pb-2 px-1 text-lg rounded-sm bg-transparent border-grey35 outline-none bg-grey15 text-white duration-200 ease-in-out placeholder-grey30 focus:placeholder-grey60" />
        </li>
    )
}

export default PopUpField;