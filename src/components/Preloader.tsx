import { useEffect, useRef, memo } from 'react';

import logo from "../assets/logo.svg";

const Preloader = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        window.onload = () => {
            const container = containerRef.current;
            const img = imgRef.current;
            const text = textRef.current;

            if(container && img && text) { 
                //Extending gap between letters after 550 miliseconds:
                setTimeout(() => {
                    text.className = text.className.replace("tracking-[0.1rem]", "tracking-[0.25rem]");
                }, 550)


                //1. Narrowing gap between letters
                //2. Setting opacity 0 for the text
                //3. Scaling the logo after text narrows after 200 miliseconds
                setTimeout(() => {
                    text.className = text.className.replace("tracking-[0.25rem]", "tracking-tighter");

                    text.className = text.className.replace("opacity-100", "opacity-0");

                    setTimeout(() => {
                        img.className = img.className.replace("scale-0", "scale-100");
                    }, 200); 
                }, 800)
                
                

                //Setting height of the preloader container to the zero after 1.8 seconds after all the operations
                //with the text and logo was done
                //Also setting logos height to the zero
                //and after preloader gone, setting display: none to it and every element in it;
                setTimeout(() => {
                    container.className = container.className.replace("h-full", "h-0");
                    
                    setTimeout(() => {
                        img.className = img.className.replace("h-24", "h-0")
                    }, 50);

                    setTimeout(() => {
                        container.className = container.className.replace("visible", "hidden");
                        img.className = img.className.replace("visible", "hidden");
                        text.className = text.className.replace("visible", "hidden");
                    }, 700);
                }, 1800); 
            }
        }
    })

    return (
        <div ref={containerRef} className="fixed visible top-0 left-0 h-full w-full bg-[#0f0f0f] z-50 duration-[650ms] ease-in-out">
            <div className="preloader-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-36">
                <img ref={imgRef} src={logo} alt="" className="preloader-img scale-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 visible duration-[400ms] ease-in-out" />
           
                <h1 ref={textRef} className='preloader-text text-4xl pointer-events-none text-center text-white barlow-semibold absolute visible tracking-[0.1rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-[350ms] ease-in-out opacity-100'>
                    SquareUP
                </h1>
            </div>
        </div>
    )
}

export default memo(Preloader);