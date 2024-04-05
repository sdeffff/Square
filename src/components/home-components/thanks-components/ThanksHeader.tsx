import thankBg from "../../../assets/thank-bg.png";
import thankLogo from "../../../assets/ThankLogo.svg";

import Button from "../../Button";

const ThanksHeader = () => {
    return (
        <div className="relative">
            <img src={thankBg} alt="" />

            <div className="flex flex-col items-center gap-10 md:gap-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src={thankLogo} className="xl:w-20 md:w-16 xl:h-20 md:h-16" alt="" />

                <article className="text-white text-center flex flex-col gap-3 w-[56rem]">
                    <h1 className="barlow-semibold text-4xl">Thank you for your Interest in SquareUp.</h1>

                    <p className="barlow-light">We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
                </article>

                <Button 
                link="#"
                txt = "Start Project"></Button>
            </div>
        </div>
    )
}

export default ThanksHeader;