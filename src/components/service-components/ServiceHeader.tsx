type Props = {
    heading: string,
    txt: string,
    service: string,
}

const SectionHeader = (props: Props) => {
    return (
        <article className="border-x-2 border-grey15 flex flex-col items-start gap-12 px-12 pt-28 pb-12">
            <div className="flex flex-col gap-4">
                <h1 className="barlow-semibold text-white text-5xl">{props.heading}</h1>

                <p className="barlow-regular text-grey90 text-[1.1rem] max-w-[74rem]">{props.txt}</p>
            </div>

            <span className="barlow-regular text-lg text-white bg-grey15 py-3 px-4 rounded-md">{props.service}</span>
        </article>
    )
}

export default SectionHeader;