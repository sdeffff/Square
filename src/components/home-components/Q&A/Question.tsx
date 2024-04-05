import { useState, useRef, useEffect } from "react";

import { IonIcon } from "@ionic/react";
import {closeOutline} from "ionicons/icons";

type Props = {
    number: string,
    title: string,
    txt: string
}

const Question = (vals: Props) => {
    const cardRef = useRef<HTMLLIElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const crossRef = useRef<HTMLIonIconElement>(null);
    
    const [clicked, setClicked] = useState(false);

    const handleCLick = () => {
        
    if(cardRef.current && textRef.current && titleRef.current && crossRef.current) {
        const card = cardRef.current;
        const text = textRef.current;
        const title = titleRef.current;
        const cross = crossRef.current;

        if(clicked) {
            text.className = text.className.replace("visible", "invisible")
            card.className = card.className.replace("h-[15.9rem]", "h-32");
            title.className = title.className.replace("text-green70", "text-white");

            cross.className = cross.className.replace("rotate-0", "rotate-45");
            cross.className = cross.className.replace("text-green70", "text-white");
        } else {
            text.className = text.className.replace("invisible", "visible")
            card.className = card.className.replace("h-32", "h-[15.9rem]");
            title.className = title.className.replace("text-white", "text-green70");

            cross.className = cross.className.replace("rotate-45", "rotate-0");
            cross.className = cross.className.replace("text-white", "text-green70");
        }
    }

    setClicked(!clicked);
}

    return (
        <li ref={cardRef} onClick={handleCLick} className="flex gap-7 bg-grey10 border-[0.5px] border-grey15 cursor-pointer h-32 py-6 px-12 overflow-hidden duration-[250ms] ease-in-out">
            <img src={vals.number} className="w-20 h-20" alt="" />

            <article className="flex flex-col">
                <div className="flex items-center justify-between py-6">
                    <h1 ref={titleRef} className="barlow-medium text-white text-[1.1rem] duration-[250ms] ease-in-out">{vals.title}</h1>

                    <IonIcon ref={crossRef} icon={closeOutline} className="text-white cursor-pointer w-7 h-7 rotate-45 duration-[250ms] ease-in-out"></IonIcon>
                </div>

                <p ref={textRef} className="text-white barlow-light invisible">{vals.txt}</p>
            </article>
        </li>
    )
}

export default Question;