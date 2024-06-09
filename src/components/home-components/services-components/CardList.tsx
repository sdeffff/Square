import Card from "./Card";

import design from "./../../../assets/Design.svg";
import engineering from "./../../../assets/Engineering.svg";
import pm from "./../../../assets/Project Management.svg";

const CardList = () => {
    return (
        <ul className="flex w-full items-center border border-grey15">
            <Card img={design}
                    title="Design"
                    txt="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."></Card>
            <Card img={engineering}
                    title="Engineering"
                    txt="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."></Card>
            <Card img={pm}
                    title="Project Management"
                    txt="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."></Card>
        </ul>
    )
}

export default CardList;