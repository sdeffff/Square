import React, { useRef, memo } from 'react';

type Props = {
    img: string,
    title: string,
    txt: string
}

const SectionHeader: React.FC<Props> = (props) => {
    const txtRef = useRef<HTMLHeadingElement>(null);

    const handleText = () => {
        const text = txtRef.current;

        if (!text) return;

        const { dataset } = text;
        if (!dataset || !dataset.value) return;

        let iteration = 0;
        const originalValue = dataset.value;

        const interval = setInterval(() => {
            if (!dataset || !dataset.value) return;

            text.innerText = originalValue
                .split("")
                .map((_, index) => {
                    if (index < iteration) {
                        return originalValue[index];
                    }
                    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
                })
                .join("");

            if (iteration >= originalValue.length) {
                clearInterval(interval);
            }

            iteration++;
        }, 30);

        setTimeout(() => {
            clearInterval(interval);
            text.innerText = originalValue;
        }, 1000);
    }

    return (
        <div className="relative border-x-2 border-grey15">
            <img src={props.img} loading="lazy" className="pointer-events-none h-full" alt="" />
            <article className="absolute flex flex-col gap-0 xl:w-[66rem] md:w-[56rem] text-[#fff] text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                <h1 ref={txtRef} data-value={props.title} onMouseOver={handleText} className="barlow-semibold text-2xl sm:text-3xl md:text-4xl xl:text-[2.5rem] leading-10 cursor-[var(--cursorDefault)]">{props.title}</h1>
                <p className="barlow-light w-96 text-sm md:w-full md:text-md lg:text-[1.1rem]">{props.txt}</p>
            </article>
        </div>
    )
}

export default memo(SectionHeader);
