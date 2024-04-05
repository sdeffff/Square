import React from "react";

type Props = {
    img: string,
    title: string,
    txt: string
}

const SectionHeader = (props: Props) => {
    return (
        <div className="relative border-x-2 border-grey15">
            <img src={props.img} className="pointer-events-none h-full" alt="" />

            <article className="absolute flex flex-col gap-3 xl:w-[66rem] md:w-[56rem] text-[#fff] text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                <h1 className="barlow-semibold xl:text-[2.5rem] md:text-3xl leading-10">{props.title}</h1>

                <p className="barlow-light text-[1.1rem]">{props.txt}</p>
            </article>
        </div>
    )
}

export default SectionHeader;