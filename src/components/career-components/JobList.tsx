import { ComponentType } from "react";

//Пропсы для карточек с home page -> service elements
type CardProps = {
    title: string;
    txt: string;
    img: string;
};

//Пропсы для общих элементов
type Props = {
    title: string;
    card1: ComponentType<CardProps>;
    card1Props: CardProps;
    card2: ComponentType<CardProps>;
    card2Props: CardProps;
    card3: ComponentType<CardProps>;
    card3Props: CardProps;
};

const JobList: React.FC<Props> = ({
    //Variables for the props
    title,
    card1: Card1,
    card1Props,
    card2: Card2,
    card2Props,
    card3: Card3,
    card3Props
}) => {
    return (
        <>
            <div className="header flex items-center gap-3 border-t-2 border-b border-x-[1.5px] border-grey15 px-12 py-12 w-full duration-[250ms] ease-in-out">
                <h1 className="title text-grey60 text-3xl barlow-medium duration-[250ms] ease-in-out">{title}</h1>
            </div>

            <div className="flex items-center">
                <Card1 {...card1Props} />
                <Card2 {...card2Props} />
                <Card3 {...card3Props} />
            </div>
        </>
    );
};

export default JobList;