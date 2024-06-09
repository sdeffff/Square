import Companies from "./Companies";
import HeroMain from "./HeroMain";

import { memo } from "react";

import "./hero.css";

const Hero = () => {
    // useEffect(() => {
    //     const t1 = gsap.timeline();

    //     t1.from(".txt", {
    //         y: 100,
    //         ease: "power4.out",
    //         delay: 1,
    //         duration: 1.8,
    //         stagger: {
    //             amount: 0.4
    //         }
    //     });
    // }, [])

    return (
        <> {/*This is called react fragment*/}
            <HeroMain></HeroMain>

            <Companies></Companies>  
        </>
    )
}

export default memo(Hero);