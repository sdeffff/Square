import { useEffect, useRef } from "react";

import serviceBg from "./../../../assets/services.png";

import CardList from "./CardList";
import SectionHeader from "../../SectionHeader";

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
            <SectionHeader
                img={serviceBg}
                title="Our Services"
                txt="Transform your brand with our innovative digital solutions that captivate and engage your audience."></SectionHeader>

            <CardList></CardList>
        </section>
    )
}

export default Services;    