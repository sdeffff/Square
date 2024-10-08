import logo from "../../assets/ThankLogo.svg";

import Button from "../button-components/Button";

const JobFooter = () => {
    return (
        <footer className="flex flex-col gap-12 p-7 border-x border-t border-grey15">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <img src={logo} alt="" className="h-36 w-36"/>

                <article className="flex flex-col gap-5 text-grey60">
                    <h3 className="barlow-regular text-2xl">Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h3>
                    
                    <p className="barlow-regular tracking-wide">Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
                </article>
            </div>

            <div className="flex flex-col md:flex-row items-center px-6 sm:px-8 pt-2 md:pt-0 gap-7 bg-[#1b1b1b] rounded-md border border-grey15">
                <h3 className="barlow-regular text-grey60  xl:text-[1.05rem]">Welcome to SquareUp</h3>

                <span className="barlow-regular text-white bg-grey15 px-5 py-3 rounded-md  xl:text-[1.05rem]">Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</span>

                <Button
                link=""
                txt="Start Project">

                </Button>
            </div>
        </footer>
    )
}

export default JobFooter;