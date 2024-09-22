type Props = {
    title: string,
    img: string,
}

const ServiceCard = (props: Props) => {
    const handleOnMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
        const { currentTarget: target } = e;

        const rect = target.getBoundingClientRect();
        //getting the mouse x and y positions
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        //giving value of current x and y mouse position to the variable that we are giving to .css
        //file
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <li onMouseMove={handleOnMouseMove} className="service-card w-[49.9vw] md:w-[48.5vw] lg:w-full h-64 bg-grey15">
            <div className="service-card-content p-7 md:p-9 lg:p-12 flex flex-col gap-7 bg-grey10">
                <img src={props.img} className="pointer-events-none w-20 h-20" alt="" /> 
                <p className="barlow-regular text-white text-[1.05rem]">{props.title}</p>
            </div>
        </li>
    )
}

export default ServiceCard;