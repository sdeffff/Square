import { useRef, memo } from "react";

type Props = {
    img: string;
    title: string;
    txt: string;
}

const Card = (props: Props) => {
    const cardRef = useRef<HTMLLIElement>(null);

    const handleOnMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
        const { currentTarget: target } = e; //target - this is our white circle on the <li> tag

        const rect = target.getBoundingClientRect();
        //getting the mouse x and y positions
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        //giving value of current x and y mouse position to the variable that we are giving to .css
        //file
        //And setting variables to the white circle
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <li onMouseMove={handleOnMouseMove} ref={cardRef} className="card relative flex flex-col justify-between xl:p-12 bg:p-9 p-12 border bg:border-x border-grey15 bg-grey10 text-white bg:w-[26.66rem] h-[35rem] md:h-[32rem]">
            <img src={props.img} alt="" className="w-20 h-20 pointer-events-none" loading="lazy" />

            <article className="flex flex-col gap-5">
                <h2 className="barlow-medium xl:text-3xl text-2xl">{props.title}</h2>

                <p className="barlow-light text-base">{props.txt}</p>
            </article>

            <a href="#" className="z-10"><button className="bg-grey15 text-base w-full barlow-regular py-4 rounded-md duration-[250ms] hover:bg-grey20">Learn More</button></a>
        </li>
    )
}

export default memo(Card);