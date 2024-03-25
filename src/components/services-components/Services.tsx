import { useEffect, useRef } from "react";

import serviceBg from "./../../assets/services.png";

import CardList from "./CardList";

import gsap from 'gsap';

const Services = () => {
    //recreate these functions using useGSAP:
    const textRef = useRef(null);

    // useEffect(() => {
    //     const tl = gsap.timeline({ paused: true });

    //     tl.fromTo(textRef.current, 3, {
    //         width: "0",
    //     }, {
    //         ease: "steps(12)"
    //     }, 0);

    //     tl.fromTo(textRef.current, 0.5, {
    //     }, {
    //         repeat: -1,
    //         ease: "steps(12)"
    //     }, 0);

    //     tl.play();

    //     return () => {
    //         tl.kill();
    //     };
    // }, []);

    return (
        <section>
            <div className="relative">
                <img src={serviceBg} alt="" className="pointer-events-none" loading="lazy" />

                <article className="absolute flex flex-col gap-3 w-[62.25rem] text-[#fff] text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <h1 ref={textRef} className="barlow-semibold text-[2.5rem] leading-10">Our Services</h1>

                    <p className="barlow-light text-[1.2rem]">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
                </article>
            </div>

            <CardList></CardList>
        </section>
    )
}

export default Services;    