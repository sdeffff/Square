import { Link } from "react-router-dom";

type Props = {
    icon: string,
    page: string,
}

const MobileFooterEl = (props: Props) => {
    return (
        <li className="duration-[250ms] ease-in">
            <Link to={props.page}><img src={props.icon} alt="" className="w-7 h-7" /></Link>
        </li>
    )
}

export default MobileFooterEl;