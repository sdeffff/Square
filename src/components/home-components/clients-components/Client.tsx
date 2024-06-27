import { memo } from 'react';

import "./clients.css";

type Props = {
    title: string,
    txt: string,
    pfp: string,
    name: string,
    job: string,
}

const Client = (vals: Props) => {  
    return(
        <li className="client-el flex flex-col justify-between items-start gap-10 lg:px-12 py-16 px-8 bg-grey10 border-[0.5px] border-grey15">
            <article className="flex flex-col gap-6 items-start">
                <h1 className="barlow-medium xl:text-[1.3rem] text-xl leading-7 text-green80 duration-[250ms] ease-in-out">{vals.title}</h1>

                <p className="text-white barlow-light text-base tracking-wide">{vals.txt}</p>
            </article>

            <div className="flex items-center justify-between p-5 md:p-3 bg-[#1b1b1b] rounded-md border border-grey15 w-full">
                <div className="flex items-center gap-4">
                    <img src={vals.pfp} alt="" className="pointer-events-none" />

                    <article>
                        <h2 className="text-white barlow-medium">{vals.name}</h2>

                        <p className="text-grey90 barlow-light">{vals.job}</p>
                    </article>
                </div>

                <button className="text-white rounded-lg bg-grey15 barlow-regular py-4 px-5 duration-[250ms] xl:text-base md:text-sm hover:bg-grey20">Open Website</button>
            </div>
        </li>
    )
}

export default memo(Client);