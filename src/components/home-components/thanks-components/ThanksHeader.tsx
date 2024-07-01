import { useEffect, useRef } from "react"

import Button from "../../Button";

import thankBg from "../../../assets/thank-bg.png";
import thankBgSmall from "../../../assets/thank-bg-small.png";
import thankLogo from "../../../assets/ThankLogo.svg";

const ThanksHeader = () => {
    const thanksRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if(thanksRef.current) {
            if(window.innerWidth <= 547) {
                thanksRef.current.src = thankBgSmall;
            } else if(window.innerWidth > 547) {
                thanksRef.current.src = thankBg;
            }
        }

        console.log(window.innerWidth);
    }, [window.innerWidth])

    return (
        <div className="relative">
            <img src={thankBg} ref={thanksRef} alt="" />

            <div className="flex flex-col items-center md:gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src={thankLogo} className="xl:w-20 md:w-16 xl:h-20 md:h-16 md:block hidden" alt="" />

                <article className="text-white text-center flex flex-col gap-3 tb:w-[45rem] w-[33rem]">
                    <h1 className="barlow-semibold text-2xl tb:text-4xl w-full">Thank you for your Interest in SquareUp.</h1>

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