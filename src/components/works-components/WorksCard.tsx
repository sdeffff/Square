import { memo } from "react";

import workLink from "../../assets/workLink.svg";

type Props = {
    title: string,
    img: string,
    name: string,
    website: string,
    desc: string
}

const WorksCard = (props: Props) => {
    return (
        <li className="border-x-[0.5px] border-t-[0.5px] border-grey15 px-5 xl:px-12 pb-14 lg:h-[45rem] tb:h-[43rem] border-b-[0.5px] ">
            <h1 className="text-grey60 text-[1.22rem] md:text-[1.15rem] lg:text-[1.17rem] xl:text-[1.35rem] barlow-medium py-5 md:py-7">{props.title}</h1>

            <div className="flex flex-col gap-7 pt-8">
                <img src={props.img} alt="" />

                <article className="flex items-center justify-between">
                    <div className="flex flex-col gap-4 items-start">
                        <h2 className="text-white barlow-regular text-xl">{props.name}</h2>

                        <a href="#" className="website-link"><span className="website text-grey60 barlow-regular px-3 py-2 rounded-md bg-grey15 ease-in-out duration-[250ms]">{props.website}</span></a>
                    </div>

                    <a href="#" className="link-wrapper relative rounded-lg bg-grey15 overflow-hidden"><img src={workLink} alt="" className="link-img relative p-4 pointer-events-auto cursor-[var(--cursorPointer)] ease-in-out duration-[250ms]" /></a>
                </article>

                <p className="text-grey60">{props.desc}</p>
            </div>
        </li>
    )
}

export default memo(WorksCard);