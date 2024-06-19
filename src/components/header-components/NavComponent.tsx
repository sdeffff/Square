import { Link } from "react-router-dom";

type Props = {
    page: string,
    txt: string,
};

const handleScroll = () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 315);
}

const NavComponent = (props: Props) => {
    return (
        <li><Link onClick={handleScroll} to={props.page} className="ease-in-out duration-[250ms] py-4 px-6 rounded-lg hover:bg-[#26262634] focus:bg-grey15 leading-7 xl:text-[1.2rem] lg:text-[1.1rem] md:text-[1rem]">{props.txt}</Link></li>
    )
}

export default NavComponent;