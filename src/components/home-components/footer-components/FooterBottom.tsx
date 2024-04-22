import { useState, useRef } from "react";

import email from "../../../assets/email.svg";
import phone from "../../../assets/phone.svg";
import location from "../../../assets/location.svg";

import "./footer.css";

const FooterBottom = () => {
    const emailRef = useRef<HTMLParagraphElement>(null);
    const emailTP = useRef<HTMLSpanElement>(null);

    const [emailTooltip, setEmailTooltip] = useState(false);
    
    const phoneRef = useRef<HTMLParagraphElement>(null);
    const phoneTP = useRef<HTMLSpanElement>(null);

    const [phoneTooltip, setPhoneTooltip] = useState(false);

    const copyToClipboard = (text: HTMLParagraphElement | null) => {
        if(text) {
            navigator.clipboard.writeText(text.innerText);
        }
    }

    const copyEmail = () => {
        if(emailTP.current) {
            emailTP.current.innerText = "Copied!";
        }
        
        copyToClipboard(emailRef.current);
    }

    const copyPhone = () => {
        if(phoneTP.current) {
            phoneTP.current.innerText = "Copied!";
        }

        copyToClipboard(phoneRef.current);
    }

    return (
        <div className="flex justify-between border-t-2 border-grey15 pt-12">
            <ul className="text-white flex gap-6">
                <li className="relative flex items-center gap-2">
                    <img src={email} alt="" className="w-[1.3rem] h-[1.3rem]" /> 

                        {emailTooltip && (
                            <span ref={emailTP} className="absolute -top-4 left-1/2 text-center w-24 h-7 rounded-lg duration-200 ease-out -translate-x-1/2 -translate-y-1/2 bg-[#101010]" >
                                Copy
                            </span>
                        )}

                    <p ref={emailRef} onClick={copyEmail} onMouseEnter={() => setEmailTooltip(true)} onMouseLeave={() => setEmailTooltip(false)} className="email relative text-[1.05rem] text-green70 underline barlow-regular cursor-[var(--cursorPointer)]">hello@squareup.com</p>
                </li>
                <li className="relative flex items-center gap-2">
                    <img src={phone} alt="" className="w-[1.3rem] h-[1.3rem]" /> 

                        {phoneTooltip && (
                            <span ref={phoneTP} className="absolute -top-4 left-1/2 text-center w-24 h-7 rounded-lg duration-200 ease-out -translate-x-1/2 -translate-y-1/2 bg-[#101010]" >
                                Copy
                            </span>
                        )}
                    
                    <p ref={phoneRef} onClick={copyPhone} onMouseEnter={() => setPhoneTooltip(true)} onMouseLeave={() => setPhoneTooltip(false)} className="phone relative text-[1.05rem] text-green70 underline barlow-regular cursor-[var(--cursorPointer)]">+91 91813 23 2309</p>
                </li>
                <li className="flex items-center gap-2"><img src={location} alt="" className="w-[1.3rem] h-[1.3rem]" /> <a href="https://www.google.com/maps/place/Field+of+Corn/@40.0851707,-83.1247859,634m/data=!3m1!1e3!4m6!3m5!1s0x88389320245f8f81:0x93d0cfc40258fb5c!8m2!3d40.0850272!4d-83.1232409!16s%2Fm%2F02vz81y?entry=ttu" target="_blank" className="cursor-[var(--cursorPointer)] text-base barlow-regular">Somewhere in the World</a></li>
            </ul>

            <p className="text-[1.1rem] barlow-regular text-grey60">© 2023 SquareUp. All rights reserved.</p>
        </div>
    )
}

export default FooterBottom;