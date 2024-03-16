import React from 'react';

import Button from '../components/Button';
import Companies from '../components/hero-components/Companies';

import "./home.css";
const Home = () => {
    return (
        <>
            <section className='border-x-2 border-grey15 pt-28 h-[42.75rem] relative'>
                <div className="flex flex-col items-center gap-12 justify-start text-[#fff] h-full">
                    <article className='barlow-semibold text-center text-6xl leading-snug z-10'>
                        A Digital Product Studio <br/>
                            that will Work
                    </article>

                    <div className='flex items-center gap-1 border border-grey15 rounded-md px-8 py-5 text-grey60 text-[1.3rem] backdrop-blur-sm barlow-light'>
                        For <span>Startups</span>, <span>Enterprise leaders</span>, 
                        <span>Media & Publishers</span> and <span>Social Good</span>
                    </div>

                    <div className='flex items-center gap-4 z-10'>
                        <button className="text-[1.05rem] barlow-medium text-white border-2 border-grey15 rounded px-[1.5rem] py-4 my-5 backdrop-blur-sm duration-200 ease-in hover:bg-grey10">Our Works</button>
                        <Button txt={"Contact Us"}></Button>
                    </div>
                </div>

                <div className='text-[#fff] barlow-regular bg-grey10 py-4 px-8 border rounded-full border-grey15 absolute bottom-[-9%] left-2/4 translate-y-[-50%] translate-x-[-50%]'>
                    <h1 className='text-[1.15rem]'>Trusted By 250+ Companies</h1>
                </div>
            </section>
        
            <Companies></Companies>  
        </>
    )
}

export default Home;