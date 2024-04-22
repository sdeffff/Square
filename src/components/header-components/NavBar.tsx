import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";

import { Link } from "react-router-dom";
import PopUpField from "./Popup/PopUpField";
import "./Popup/popup.css";

import logoImg from "./../../assets/logo.svg";

const NavBar = () => {
    const headerRef = useRef<HTMLElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [showPopUp, setShowPopUp] = useState(false);

    //decreasing height of navbar when scrolling
    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;

            if(header) {
                if(window.scrollY >= 20) header.className = header.className.replace("py-4", "py-1");
                else header.className = header.className.replace("py-1", "py-4");
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleWrapper = () => {
        const wrapper = wrapperRef.current;

        if(wrapper) {
            wrapper.className = wrapper.className.replace("opacity-100", "opacity-0");

            setTimeout(() => {
                wrapper.className = wrapper.className.replace("visible", "hidden");
            }, 120)

            setShowPopUp(false);
        }
    }

    return (
        <>
            <header ref={headerRef} className="fixed z-40 w-full top-0 bg-[#191919] text-white flex justify-between items-center border-b-2 border-[#262626] 2xl:px-32 xl:px-20 md:px-3 py-4 duration-[250ms]">
                <Link to="/" className="flex items-center justify-center gap-3 text-[1.5rem] font-bold">
                    <img src={logoImg} alt="" loading="lazy" />

                    <h1 className="lg:block md:hidden cursor-[var(--cursorPointer)]">Square Up</h1>
                </Link>

                <Navigation></Navigation>

                <button 
                className="text-[1.05rem] barlow-medium bg-green50 text-black rounded px-[1.5rem] py-4 my-5 duration-200 ease-in hover:bg-green70" 
                value={"Contact Us"}
                onClick={() => setShowPopUp(true)}> Contact Us </button>
            </header>

            {showPopUp && (
                <div ref={wrapperRef} onClick={handleWrapper} className="popup-wrapper fixed visible z-[48] opacity-100 duration-200 ease-in-out w-full h-full top-0 left-0">
                    <form className="flex flex-col gap-7 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-grey10 py-5 px-8">
                        <div className="flex flex-col gap-6">
                                <ul className="flex gap-6">
                                    <PopUpField
                                        name="Your name"
                                        type="text"
                                        width="16.25rem"></PopUpField>
                                    <PopUpField
                                        name="Your email"
                                        type="email"
                                        width="16.25rem"></PopUpField>
                                </ul>
        
                            <ul className="flex flex-col w-full gap-3">
                                <PopUpField
                                    name="Subject(Optional)"
                                    type="text"
                                    width="100%"></PopUpField>
                                <textarea name="message" placeholder="Message" required 
                                className="barlow-regular resize-none outline-none border-none bg-grey15 text-white text-lg px-2 py-1 placeholder-grey30 focus:placeholder-grey60"></textarea>
                            </ul>
                        </div>
        
                        <div className="text-white flex w-full justify-between">
                            <p className="text-grey60 text-sm">Or write directly to <br/>
                                <span><a href="#" className="text-green80"> hello@squareup.com</a></span>
                            </p>
        
                            <button type="submit" value={"Send"}>Send</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default NavBar;