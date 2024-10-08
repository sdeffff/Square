import { useState, useRef, memo } from "react";

import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";

import "./footer.css";

const FooterBottom = () => {
    const emailRef = useRef<HTMLParagraphElement>(null);
    const emailTP = useRef<HTMLSpanElement>(null);

    const [emailTooltip, setEmailTooltip] = useState(false);
    
    const phoneRef = useRef<HTMLParagraphElement>(null);
    const phoneTP = useRef<HTMLSpanElement>(null);

    const [phoneTooltip, setPhoneTooltip] = useState(false);

    //Function to copy text to clipboard
    const copyInner = (e:any) => {
        if(e.target.classList[0] === "email") {
            if(emailRef.current) {
               navigator.clipboard.writeText(emailRef.current.innerText); 
            }
            
            if(emailTP.current) {
                emailTP.current.innerText = "Copied";
            }
        } else if(e.target.classList[0] === "phone") {
            if(phoneRef.current) {
                navigator.clipboard.writeText(phoneRef.current.innerText); 
             }
             
             if(phoneTP.current) {
                phoneTP.current.innerText = "Copied";
             }
        }
    }


    //Functions to change innerText of span back to Copy when the mouse is not on the <p> tag:
    const checkEmailTooltip = () => {
        if(emailTooltip) {
            setTimeout(() => {
                if(emailTP.current) emailTP.current.innerText = "Copy";
            }, 300); //Setting delay to change it
        }

        setEmailTooltip(false);
    }

    const checkPhoneTooltip = () => {
        if(phoneTooltip) {
            setTimeout(() => {
                if(phoneTP.current) phoneTP.current.innerText = "Copy"
            }, 300); 
        }

        setPhoneTooltip(false);
    }
    //---
    
    return (
        <div className="flex justify-between items-end sm:items-center border-t-2 border-grey15 pt-12">
            <ul className="text-white flex flex-col gap-4 lg:flex-row lg:gap-6">
                <li className="relative flex items-center gap-2">
                    <img src={email} alt="" className="w-[1.3rem] h-[1.3rem]"/> 
                    <p ref={emailRef} onClick={copyInner} onMouseEnter={() => setEmailTooltip(true)} onMouseLeave={checkEmailTooltip} className="email relative text-[1.05rem] text-green70 barlow-regular cursor-[var(--cursorPointer)]">hello@squareup.com</p>
                    <span ref={emailTP} className="copyEmail absolute -top-4 left-1/2 text-center w-24 h-7 rounded-lg duration-200 ease-out -translate-x-1/2 -translate-y-1/2 bg-[#101010]" >
                        Copy
                    </span>
                </li>
                <li className="relative flex items-center gap-2">
                    <img src={phone} alt="" className="w-[1.3rem] h-[1.3rem]" /> 
                    <p ref={phoneRef} onClick={copyInner} onMouseEnter={() => setPhoneTooltip(true)} onMouseLeave={checkPhoneTooltip} className="phone relative text-[1.05rem] text-green70 barlow-regular cursor-[var(--cursorPointer)]">+91 91813 23 2309</p>
                    <span ref={phoneTP} className="copyPhone absolute -top-4 left-1/2 text-center w-24 h-7 rounded-lg duration-200 ease-out -translate-x-1/2 -translate-y-1/2 bg-[#101010]" >
                        Copy
                    </span>
                </li>
                <li className="flex items-center gap-2"><img src={location} alt="" className="w-[1.3rem] h-[1.3rem]" /> <a href="https://www.google.com/maps/place/Field+of+Corn/@40.0851707,-83.1247859,634m/data=!3m1!1e3!4m6!3m5!1s0x88389320245f8f81:0x93d0cfc40258fb5c!8m2!3d40.0850272!4d-83.1232409!16s%2Fm%2F02vz81y?entry=ttu" target="_blank" className="cursor-[var(--cursorPointer)] text-base barlow-regular">Somewhere in the World</a></li>
            </ul>

            <p className="text-[0.8rem] lg:text-lg barlow-regular text-grey60">© 2023 SquareUp. All rights reserved.</p>
        </div>
    )
}

export default memo(FooterBottom);