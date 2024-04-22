import React, { useEffect, useRef } from 'react';

type Props = {
    img: string,
    title: string,
    txt: string
}

const SectionHeader: React.FC<Props> = (props) => {
    const txtRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleText = () => {
            const text = txtRef.current;

            if (!text) return;

            const { dataset } = text;
            if (!dataset || !dataset.value) return;

            let iteration = 0;

            const interval = setInterval(() => {
                if (!dataset || !dataset.value) return;

                text.innerText = dataset.value
                    .split("")
                    .map((letter, index) => {   
                        if (!dataset || !dataset.value) return;

                        if (index < iteration) {
                            return dataset.value[index];
                        }
                        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
                    })
                    .join("");

                if (iteration >= dataset.value.length) {
                    clearInterval(interval);
                }

                iteration += 1;
            }, 30);

            setTimeout(() => {
                clearInterval(interval);
                text.innerText = dataset.value;
            }, 1000);
        }

        if (txtRef.current) txtRef.current.addEventListener("mouseover", handleText);

        return () => {
            if (txtRef.current) txtRef.current?.removeEventListener("mouseover", handleText);
        };
    }, []);

    return (
        <div className="relative border-x-2 border-grey15">
            <img src={props.img} className="pointer-events-none h-full" alt="" />
            <article className="absolute flex flex-col gap-3 xl:w-[66rem] md:w-[56rem] text-[#fff] text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                <h1 ref={txtRef} data-value={props.title} className="barlow-semibold xl:text-[2.5rem] md:text-3xl leading-10">{props.title}</h1>
                <p className="barlow-light text-[1.1rem]">{props.txt}</p>
            </article>
        </div>
    )
}

export default SectionHeader;
