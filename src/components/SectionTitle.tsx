type Props = {
    heading: string,
    span: string,
    txt: string
}

const SectionTitle = (props: Props) => {
    return (
        <article className="flex flex-col gap-4 items-start px-10 py-20 border-x-2 border-grey15">
            <div className="flex flex-col gap-2">
                <h1 className="text-white text-3xl barlow-semibold">{props.heading}</h1>
                <p className="text-grey90 text-base barlow-light">{props.txt}</p>
            </div>
            <span className="text-white text-base barlow-regular p-2 rounded-md bg-grey15">{props.span}</span>
        </article>
    )
}

export default SectionTitle;