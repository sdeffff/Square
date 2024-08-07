import SectionHeader from "../../SectionHeader";
import ClientsGrid from "./ClientsGrid";

import clientsBg from "./../../../assets/clients-bg.webp";

import "./clients.css";

const Clients = () => {
    return (
        <section>
            <SectionHeader
                img={clientsBg}
                title="What our Clients say About us"
                txt="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
                />
        
            <ClientsGrid />
        </section>  
    )
}

export default Clients;