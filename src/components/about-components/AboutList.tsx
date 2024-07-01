import SectionCard from "../SectionCard";

import "../../pages/process/process.css"

const AboutList = () => {
    return (
        <ul className="about-list bg:grid bg:grid-cols-2">
            <SectionCard
            number="01"
            name="Design"
            txt="Once upon a time, in a world driven by technology, a group of talented 
            designers came together with a shared vision. They believed that design could 
            shape the way people interacted with digital products. With their passion for 
            aesthetics and usability, they founded SquareUp Digital Product Agency's design department.
            Their mission was to create visually stunning and user-friendly interfaces
            that would leave a lasting impression."></SectionCard>
            <SectionCard
            number="02"
            name="Engineering"
            txt="Meanwhile, a team of brilliant engineers was busy crafting the backbone of 
            digital innovation. With their expertise in coding and development, they founded 
            the engineering division of SquareUp. They believed that technology had the power to 
            transform ideas into reality. Their mission was to build robust, scalable, and 
            cutting-edge digital solutions that would push the boundaries of what was possible."></SectionCard>
            <SectionCard
            number="03"
            name="Project Management"
            txt="In the midst of the creative and technical minds, a group of project 
            managers emerged as the glue that held everything together. They understood 
            the importance of effective communication, organization, and efficient execution.
            With their skills in planning and coordination, they founded SquareUp's project 
            management team. Their mission was to ensure that every project ran smoothly, on time, 
            and within budget."></SectionCard>
            <SectionCard
            number="04"
            name="Collaboration"
            txt="At SquareUp, these three departments came together to form a cohesive and 
            collaborative unit. They embraced the power of collaboration and recognized that 
            their combined expertise would result in truly exceptional digital products. 
            They believed that by working closely with their clients, understanding their needs, 
            and involving them in the creative process, they could deliver solutions that surpassed 
            expectations."></SectionCard>
        </ul>
    )
}

export default AboutList;