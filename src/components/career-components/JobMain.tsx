import JobCard from "../../components/home-components/services-components/Card";
import JobList from "./JobList";

import icon1 from "../../assets/design-icon5.svg";
import icon2 from "../../assets/design-icon2.svg";
import icon3 from "../../assets/design-icon4.svg";
import icon4 from "../../assets/eng-icon1.svg";
import icon5 from "../../assets/eng-icon2.svg";
import icon6 from "../../assets/eng-icon3.svg";
import icon7 from "../../assets/pm-icon9.svg";
import icon8 from "../../assets/pm-icon6.svg";
import icon9 from "../../assets/pm-icon10.svg";

const JobMain = () => {
    return (
        <div>
            <JobList
            title="Design Job Openings"
            card1={JobCard}
            //Передаём параметры в виде объекта
            card1Props={{title: "UI Designer", txt: "Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.", img: icon1}}
            card2={JobCard}
            card2Props={{title: "UX Designer", txt: "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.", img: icon2}}
            card3={JobCard}
            card3Props={{title: "Design Head", txt: "Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.", img: icon3}}>

            </JobList>

            <JobList
            title="Development Job Openings"
            card1={JobCard}
            card1Props={{title: "Front - End Developer", txt: "Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.", img: icon4}}
            card2={JobCard}
            card2Props={{title: "Back - End  Developer", txt: "Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.", img: icon5}}
            card3={JobCard}
            card3Props={{title: "Full Stack Developer", txt: "Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.", img: icon6}}>

            </JobList>

            <JobList
            title="Management Job Openings"
            card1={JobCard}
            card1Props={{title: "BA Manager", txt: "Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.", img: icon7}}
            card2={JobCard}
            card2Props={{title: "Project Manager", txt: "Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.", img: icon8}}
            card3={JobCard}
            card3Props={{title: "HR Manager", txt: "Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.", img: icon9}}>

            </JobList>
        </div>
    )
}

export default JobMain;