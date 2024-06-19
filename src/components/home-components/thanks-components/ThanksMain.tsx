import { useRef } from 'react';
import "./thanks.css"

const ThanksMain = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    return (
        <section className="thanks-section border-x-2 border-grey15 py-4 2xl:mx-32 xl:mx-32 xl:px-16 xl:py-14 lg:py-10 md:py-5 md:mx-16 md:px-14">
            <form className="text-white flex flex-col gap-10" onClick={handleSubmit} ref={formRef}>
                <ul className="info flex justify-between">
                    <li className="barlow-medium flex flex-col gap-3 py-4 px-7 2xl:w-96 xl:w-[22rem] md:w-80">
                        <h2 className="text-lg md:text-xl">Full Name</h2>

                        <input 
                        className="input-name barlow-regular bg-transparent border-b-2 border-grey15 pt-1 pb-2 outline-none text-lg duration-150 ease-in-out placeholder-grey30 focus:placeholder-grey60"
                        type="text" 
                        placeholder="Type Here"
                        min={3}
                        max={20}
                        />
                    </li>

                    <li className="barlow-medium flex flex-col gap-3 py-4 px-9 2xl:w-96 xl:w-[22rem] md:w-80">
                        <h2 className="text-lg md:text-xl">Email</h2>

                        <input 
                        className="input-email barlow-regular bg-transparent border-b-2 border-grey15 pt-1 pb-2 outline-none text-lg duration-150 ease-in-out placeholder-grey30 focus:placeholder-grey60"
                        type="email"
                        placeholder="Type Here"
                        />
                    </li>
                </ul>

                <div className="contacting flex flex-col gap-8 p-5 md:p-7">
                    <h2 className="barlow-medium text-lg md:text-xl lg:text-2xl leading-normal">Why are you contacting us?</h2>

                    <ul className="barlow-light grid grid-cols-2 gap-y-4">
                        <li>
                            <input
                            id="web"
                            className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 outline-none border-none accent-grey15"
                            type="checkbox" />
                            <label htmlFor="web" className="text-[1.1rem] md:text-lg xl:text-xl cursor-[var(--cursorPointer)]">Web Design</label>
                        </li>
                        
                        <li>
                            <input 
                            id="col"
                            className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 outline-none border-none accent-grey15"
                            type="checkbox" />
                            <label htmlFor="col" className="text-[1.1rem] md:text-lg xl:text-xl cursor-[var(--cursorPointer)]">Collaboration</label>
                        </li>
                        
                        <li>
                            <input 
                            id="mob"
                            className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 outline-none border-none accent-grey15"
                            type="checkbox" />
                            <label htmlFor="mob" className="text-[1.1rem] md:text-lg xl:text-xl cursor-[var(--cursorPointer)]">Mobile App Design</label>
                        </li>
                        
                        <li>
                            <input 
                            id="oth"
                            className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 outline-none border-none accent-grey15"
                            type="checkbox" />
                            <label htmlFor="oth" className="text-[1.1rem] md:text-lg xl:text-xl cursor-[var(--cursorPointer)]">Others</label>
                        </li>
                    </ul>
                </div>

                <div className="message flex flex-col gap-4 p-7">
                    <h2 className="barlow-medium text-2xl leading-normal">Your Message</h2>

                    <textarea
                    className="outline-none resize-none border-none duration-150 ease-in-out placeholder-grey30 focus:placeholder-grey60 bg-[#2424245c] px-2 py-1 barlow-regular"
                    placeholder="Type Here" input-name 
                    cols={30} 
                    rows={3}
                    ></textarea>
                </div>

                <input 
                className="common-button text-black text-lg barlow-medium py-4 px-9 rounded-md bg-green50 mx-auto cursor-pointer duration-[250ms] ease-in-out hover:bg-green70"
                type="submit"
                value={"Submit"} />
            </form>
        </section>
    )
}

export default ThanksMain;