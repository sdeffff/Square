import "./thanks.css"

const ThanksMain = () => {
    return (
        <section className="thanks-section border-x-2 border-grey15 xl:mx-40 md:mx-16 xl:px-16 md:px-14 xl:py-14">
            <form className="text-white flex flex-col gap-10">
                <ul className="info flex justify-between">
                    <li className="barlow-medium flex flex-col gap-3 py-4 px-7 xl:w-96 md:w-80">
                        <h2 className="text-xl md:text-lg">Full Name</h2>

                        <input 
                        className="barlow-regular bg-transparent border-b-2 border-grey15 pt-1 pb-2 outline-none text-lg md:text-base duration-150 ease-in-out placeholder-grey30 focus:placeholder-grey60"
                        type="text" 
                        placeholder="Type Here"
                        min={3}
                        max={20}
                        />
                    </li>

                    <li className="barlow-medium flex flex-col gap-3 py-4 px-9 xl:w-96 md:w-80">
                        <h2 className="text-xl md:text-lg">Email</h2>

                        <input 
                        className="barlow-regular bg-transparent border-b-2 border-grey15 pt-1 pb-2 outline-none text-lg md:text-base duration-150 ease-in-out placeholder-grey30 focus:placeholder-grey60"
                        type="email"
                        placeholder="Type Here"
                        />
                    </li>
                </ul>

                <div className="contacting flex flex-col gap-8 p-7">
                    <h2 className="barlow-medium text-2xl leading-normal">Why are you contacting us?</h2>

                    <ul className="barlow-light grid grid-cols-2 gap-y-4">
                        <li>
                            <input 
                            className="w-6 h-6 outline-none border-none accent-grey15"
                            type="checkbox" />
                            <h2>Web Design</h2>
                        </li>
                        
                        <li>
                            <input 
                            className="w-6 h-6 outline-none border-none accent-grey15"
                            type="checkbox" />
                            <h2>Collaboration</h2>
                        </li>
                        
                        <li>
                            <input 
                            className="w-6 h-6 outline-none border-none accent-grey15"
                            type="checkbox" />
                            <h2>Mobile App Design</h2>
                        </li>
                        
                        <li>
                            <input 
                            className="w-6 h-6 outline-none border-none accent-grey15"
                            type="checkbox" />
                            <h2>Others</h2>
                        </li>
                    </ul>
                </div>

                <div className="message flex flex-col gap-4 p-7">
                    <h2 className="barlow-medium text-2xl leading-normal">Your Message</h2>

                    <textarea
                    className="outline-none resize-none border-none duration-150 ease-in-out placeholder-grey30 focus:placeholder-grey60 bg-[#2424245c] px-2 py-1 barlow-regular"
                    placeholder="Type Here" 
                    cols={30} 
                    rows={3}
                    ></textarea>
                </div>

                <input 
                className="text-black text-lg barlow-medium py-4 px-9 rounded-md bg-green50 mx-auto cursor-pointer duration-[250ms] ease-in-out hover:bg-green70"
                type="submit"
                value={"Submit"} />
            </form>
        </section>
    )
}

export default ThanksMain;