import { useRef } from "react";

import "./services.css"

type Props = {
    img: string;
    title: string;
    txt: string;
}

const Card = (props: Props) => {
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
        <li onMouseMove={handleOnMouseMove} ref={cardRef} className="card relative flex flex-col justify-between p-12 lg:p-9 md:p-6 bg-grey10 text-white border-[0.5px] border-grey15 w-[26.66rem] h-[35rem] md:h-[32rem]">
            <img src={props.img} alt="" className="w-20 h-20 pointer-events-none" loading="lazy" />

            <article className="flex flex-col gap-5">
                <h2 className="barlow-medium xl:text-3xl md:text-2xl">{props.title}</h2>

                <p className="barlow-light text-base">{props.txt}</p>
            </article>

            <a href="#" className="z-10"><button className="bg-grey15 text-base w-full barlow-regular py-4 rounded-md duration-[250ms] hover:bg-grey20">Learn More</button></a>
        </li>
    )
}

export default Card;