import Companies from "./Companies";
import HeroMain from "./HeroMain";

import { memo } from "react";

import "./hero.css";

const Hero = () => {
    return (
        <> {/*This is called react fragment*/}
            <HeroMain />

            <Companies />
        </>
    )
}

export default memo(Hero);