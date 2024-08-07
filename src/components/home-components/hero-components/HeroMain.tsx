import Button from "../../button-components/Button";
import { Link } from "react-router-dom";

const HeroMain = () => {
    return (
        <section className='hero-main border-x-2 border-grey15 pt-28 h-[42.75rem] relative'>
                <div className="flex flex-col items-center gap-12 justify-start text-[#fff] h-full">
                    <article className='overflow-hidden w-full h-[10.3rem] relative barlow-semibold text-center text-6xl leading-snug z-10'>
                        <p className="">A Digital Product Studio <br/>
                                that will Work
                            </p>
                    </article>

                    <div className='for hidden sm:flex items-center gap-1 border border-grey15 rounded-md px-8 py-5 text-grey60 xl:text-[1.3rem] md:text-lg backdrop-blur-sm barlow-light'>
                        For <span>Startups</span>, <span>Enterprise leaders</span>, 
                        <span>Media & Publishers</span> and <span>Social Good</span>
                    </div>

                    <div className='flex items-center gap-4 z-10'>
                        <Link to={"/Square/works"}><button name="works" className="common-button text-[1.05rem] barlow-medium text-white border-2 border-grey15 rounded px-[1.5rem] py-4 my-5 backdrop-blur-sm duration-200 ease-in hover:bg-grey10"> <p> Our Works </p></button></Link>
                        <Button 
                        link="#start"
                        txt={"Start Project"} />
                    </div>
                </div>

                <div className='text-[#fff] barlow-regular bg-grey10 tb:py-4 tb:px-8 py-2 px-6 border rounded-full border-grey15 absolute bottom-[-6%] tb:bottom-[-9%] left-2/4 translate-y-[-50%] translate-x-[-50%]'>
                    <h1 className='text-[1rem] tb:text-[1.15rem] text-base'>Trusted By 250+ Companies</h1>
                </div>
        </section>
    )
}

export default HeroMain;