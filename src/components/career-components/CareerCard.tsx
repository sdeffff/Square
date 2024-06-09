type Props = {
    title: string,
    txt: string,
}

const CareerCard = (props: Props) => {
    return (
        <li className="career-card flex flex-col gap-12 px-12 py-24 border border-grey15">
            <h2 className="text-green80 text-3xl barlow-regular pb-12 border-b border-grey15">{props.title}</h2>

            <p className="text-grey60 text-[1.05rem] barlow-light">{props.txt}</p>
        </li>
    )
}

export default CareerCard;