import WorksCard from "./WorksCard";

import work_1 from "../../assets/work1.webp";
import work_2 from "../../assets/work2.webp";
import work_3 from "../../assets/work3.webp";
import work_4 from "../../assets/work4.webp";
import work_5 from "../../assets/work5.webp";

import "../../pages/Works/works.css";

const WorksList = () => {
    return (
        <ul className="works-list tb:grid tb:grid-cols-2 place-items-center border-[0.5px] border-grey15">
            <WorksCard
            title="E-Commerce Platform for Fashion Hub"
            img={work_1}
            name="Chic Boutique"
            website="htttps:/www.chicboutique.com"
            desc="
            We developed a visually stunning and user-friendly e-commerce platform for 
            Chic Boutique, a renowned fashion retailer. The platform featured seamless product 
            browsing, secure payment integration, and personalized recommendations, resulting in 
            increased online sales and customer satisfaction."
            />

            <WorksCard
            title="Mobile App for Food Delivery Service"
            img={work_2}
            name="HungryBites"
            website="htttps:/www.hungrybites.com"
            desc="
            HungryBites approached us to create a mobile app that streamlined their food 
            delivery service. The app included features like real-time order tracking, 
            easy menu customization, and secure payment options, resulting in improved 
            customer convenience and operational efficiency." />

            <WorksCard
            title="Booking and Reservation System for Event Management"
            img={work_3}
            name="EventMasters"
            website="htttps:/www.eventmasters.com"
            desc="
            EventMasters required a comprehensive booking and reservation system for their 
            event management services. We designed a user-friendly platform that allowed 
            seamless event registration, ticketing, and attendee management, resulting in 
            streamlined processes and enhanced customer experiences." />

            <WorksCard
            title="Custom Software for Workflow Automation"
            img={work_4}
            name="ProTech Solutions"
            website="htttps:/www.protechsolutions.com"
            desc="
            HungryBites approached us to create a mobile app that streamlined their food 
            delivery service. The app included features like real-time order tracking, 
            easy menu customization, and secure payment options, resulting in improved 
            customer convenience and operational efficiency." />

            <WorksCard
            title="Web Portal for Real Estate Listings"
            img={work_5}
            name="Dream Homes Realty"
            website="htttps:/www.dreamhomesrealty.com"
            desc="
            Dream Homes Realty wanted an intuitive web portal for showcasing their property 
            listings. We created a visually appealing platform with advanced search filters, 
            virtual tours, and a user-friendly interface, enabling potential buyers to find 
            their dream homes easily." />
        </ul>
    )
}

export default WorksList;