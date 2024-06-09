import Client from "./Client";

import first from "./../../../assets/Profile.png";
import second from "./../../../assets/Profile (1).png";
import third from "./../../../assets/Profile (2).png";
import fourth from "./../../../assets/Profile (3).png";

const ClientsGrid = () => {
    return (
        <ul className="grid grid-cols-2 border-[0.5px] border-grey15">
            <Client
                pfp={first}
                title="SquareUp has been Instrumental in Transforming our Online Presence."
                txt="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
                name="John Smith"
                job="CEO of Chic Boutique"
                ></Client>
            <Client
                pfp={second}
                title="Working with SquareUp was a breeze."
                txt="They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend."
                name="Sarah Johnson"
                job="Founder of HungryBites."
                ></Client>
            <Client
                pfp={third}
                title="SquareUp developed a comprehensive booking and reservation system for our event management company"
                txt="Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences."
                name="Mark Thompson"
                job="CEO of EventMasters"
                ></Client>
            <Client
                pfp={fourth}
                title="ProTech Solutions turned to SquareUp to automate our workflow"
                txt="They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner."
                name="Laura Adams"
                job="COO of ProTech Solutions."
                ></Client>
        </ul>
    )
}

export default ClientsGrid;