import { useState, useRef } from 'react';

import ServiceCard from "../ServiceCard";

import "./design.css";

type Props = {
    title: string,
    img1: string,
    txt1: string,
    img2: string,
    txt2: string,
    img3: string,
    txt3: string,
    img4: string,
    txt4: string,
}

const DesignServices = (props: Props) => {
    return (
        <div className='flex flex-col'>
            <div className="header flex items-center gap-3 border-t-2 border-b border-x-[1.5px] border-grey15 px-12 py-12 w-full duration-[250ms] ease-in-out">
                <h1 className="title text-grey60 text-3xl barlow-medium duration-[250ms] ease-in-out">{props.title}</h1>
            </div>

            <ul className={`flex justify-between service-list overflow-hidden border-t border-grey15`} >
                <ServiceCard
                    title={props.txt1}
                    img={props.img1}></ServiceCard>

                <ServiceCard
                    title={props.txt2}
                    img={props.img2}></ServiceCard>

                <ServiceCard
                    title={props.txt3}
                    img={props.img3}></ServiceCard>

                <ServiceCard
                    title={props.txt4}
                    img={props.img4}></ServiceCard>
            </ul>
        </div>
    )
}

export default DesignServices;