import { useRef } from "react";

import "./whyus.css"

type Props = {
    img: string,
    title: string,
    txt: string
}

const Card = (vals: Props) => {
    const cardRef = useRef<HTMLLIElement>(null);

    const handleOnMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
        const { currentTarget: target } = e;

        const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <li ref={cardRef} onMouseMove={handleOnMouseMove} className="card relative flex flex-col items-start gap-10 bg-grey10 border-[0.5px] border-grey15 p-16 txt-white duration-[250ms] ease-in-out">
            <div className="flex items-center gap-5 text-white">
                <img src={vals.img} className="md:w-20 h-20" alt="" />

                <h1 className="barlow-medium xl:text-2xl md:text-xl">{vals.title}</h1>
            </div>

            <p className="barlow-light text-white">{vals.txt}</p>
        </li>
    )
}

export default Card;