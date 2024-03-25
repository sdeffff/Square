import React from "react";

type Props = {
    img: string;
    title: string;
    txt: string;
}

const Card = (props: Props) => {
    return (
        <div className="flex flex-col justify-between p-12 bg-grey10 text-white border-2 border-grey15 w-[26.66rem] h-[35rem]">
            <img src={props.img} alt="" className="w-20 h-20 pointer-events-none" loading="lazy" />

            <article className="flex flex-col gap-5">
                <h2 className="barlow-medium text-3xl">{props.title}</h2>

                <p className="barlow-light text-base">{props.txt}</p>
            </article>

            <a href="#" className=""><button className="bg-grey15 text-base w-full barlow-regular py-4 rounded-md duration-[250ms] hover:bg-grey20">Learn More</button></a>
        </div>
    )
}

export default Card;