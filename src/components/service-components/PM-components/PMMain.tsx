import PMServices from "./PMServices";

import pmIcon1 from "../../../assets/pm-icon1.svg";
import pmIcon2 from "../../../assets/pm-icon2.svg";
import pmIcon3 from "../../../assets/pm-icon3.svg";
import pmIcon4 from "../../../assets/pm-icon4.svg";
import pmIcon5 from "../../../assets/pm-icon5.svg";
import pmIcon6 from "../../../assets/pm-icon6.svg";
import pmIcon7 from "../../../assets/pm-icon7.svg";
import pmIcon8 from "../../../assets/pm-icon8.svg";
import icon3 from "../../../assets/design-icon3.svg"
import icon4 from "../../../assets/design-icon4.svg";

const DesignMain = () => {
    return (
        <section className="border-x-[0.5px] border-grey15">
            <PMServices
                title="Project Planning and Scoping"
                img1={pmIcon1}
                txt1="Requirements Gathering and Analysis"
                img2={pmIcon2}
                txt2="Project Roadmap and Timeline Development"
                img3={pmIcon3}
                txt3="Resource Allocation and Task Assignment"
                img4={pmIcon4}
                txt4="Risk Assessment and Mitigation Strategies"></PMServices>

            <PMServices
                title="Agile Development"
                img1={pmIcon5}
                txt1="Iterative Development and Sprints"
                img2={pmIcon6}
                txt2="Scrum or Kanban Methodology Implementation"
                img3={icon3}
                txt3="Regular Progress Updates and Demos"
                img4={icon4}
                txt4="Continuous Improvement and Feedback Incorporation"></PMServices>

            <PMServices
                title="Quality Assurance and Testing"
                img1={pmIcon7}
                txt1="Test Planning and Execution"
                img2={pmIcon8}
                txt2="Functional and Usability Testing"
                img3={icon3}
                txt3="Performance and Security Testing"
                img4={icon4}
                txt4="Bug Tracking and Issue Resolution"></PMServices>
        </section>
    )
}

export default DesignMain;