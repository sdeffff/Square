import { useEffect, useRef } from 'react';

import logo from "../assets/logo.svg";

const Preloader = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        window.onload = () => {
            const container = containerRef.current;
            const img = imgRef.current;

            if(container && img) { 
                setTimeout(() => {
                    container.className = container.className.replace("h-full", "h-0");
    
                    setTimeout(() => {
                        img.className = img.className.replace("h-24", "h-0")
                    }, 200)

                    setTimeout(() => {
                        container.className = container.className.replace("visible", "hidden");
                    }, 2000)    
                }, 1500);
            }
        }
    })

    return (
        <div ref={containerRef} className="fixed visible top-0 left-0 h-full w-full bg-black z-50 duration-700 ease-in-out">
            <button className="preloader-btn absolute w-24 h-24 top-1/2 cursor-[var(--cursorDefault)] left-1/2 -translate-x-1/2 -translate-y-1/2 duration-200 ease-in-out">
                <img ref={imgRef} src={logo} alt="" className="preloader-img w-24 h-24 visible duration-200 ease-in-out" />
            </button>
        </div>
    )
}

export default Preloader;