import transition from "./transition";
import nullImg from "../assets/nothing.webp";

const PageNotFound = () => {
    return (
        <div className="w-[37.5rem] h-[31rem]">
            <img src={nullImg} alt=""  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
    )
}

export default transition(PageNotFound);