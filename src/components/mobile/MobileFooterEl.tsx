import { Link } from "react-router-dom";

type Props = {
    icon: string,
    page: string,
}

const handleScroll = () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 250)
}

const MobileFooterEl = (props: Props) => {
    return (
        <li className="duration-[250ms] ease-in">
            <Link onClick={handleScroll} to={props.page}><img src={props.icon} alt="" className="w-7 h-7" /></Link>
        </li>
    )
}

export default MobileFooterEl;