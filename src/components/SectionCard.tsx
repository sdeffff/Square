type Props = {
    number: string,
    name: string,
    txt: string
}

import "../pages/Process/process.css";

const SectionCard = (props: Props) => {
    return (
        <li className="process-card flex flex-col gap-12 px-12 py-20 border-[0.5px] border-grey15">
            <article className="flex items-end gap-6 h-[6.5rem]">
                <h3 className="barlow-semibold text-green80 text-[9rem] h-[10.4rem]">{props.number}</h3>

                <p className="barlow-regular text-grey60 text-2xl w-full border-b-2 border-grey15 rounded-sm pb-6">{props.name}</p>
            </article>

            <p className="barlow-light text-grey60 text-lg">{props.txt}</p>
        </li>
    )
}

export default SectionCard;