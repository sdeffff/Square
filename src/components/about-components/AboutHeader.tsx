import about from "../../assets/aboutImg.webp";

const AboutHeader = () => {
    return (
        <div className="flex flex-col md:flex-row gap-24 items-center py-24 px-16 lg:px-20">
            <article className="flex flex-col gap-5">
                <h3 className="barlow-semibold text-white text-5xl">About SquareUp</h3>

                <p className="barlow-light text-grey90">
                    SquareUp is a digital product agency that is passionate about crafting 
                    exceptional digital experiences. We specialize in design, engineering, 
                    and project management, helping businesses thrive in the digital landscape. 
                    At SquareUp, we follow a structured and collaborative process to ensure the 
                    successful delivery of exceptional digital products. Our process combines industry 
                    best practices, creative thinking, and a client-centric approach.
                </p>
            </article>

            <img src={about} alt="SquareUp" className="w-[63vw] md:h-[36vw]"/> {/* h-[29vw]*/}
        </div>
    )
}

export default AboutHeader;