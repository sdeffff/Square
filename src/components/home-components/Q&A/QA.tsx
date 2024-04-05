import SectionHeader from "../../SectionHeader";

import questionBg from "./../../../assets/question-bg.png";

import QuestionList from "./QuestionList";

const QA = () => {
    return (
        <section>
            <SectionHeader
                img={questionBg}
                title="Frequently Asked Questions"
                txt="Still you have any questions? Contact our Team via hello@squareup.com"
                ></SectionHeader>

                <QuestionList></QuestionList>
        </section>
    )
}

export default QA;