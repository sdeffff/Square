import Question from "./Question";

import one from "./../../../assets/one.svg";
import two from "./../../../assets/two.svg";
import three from "./../../../assets/three.svg";
import four from "./../../../assets/four.svg";
import five from "./../../../assets/five.svg";
import six from "./../../../assets/six.svg";
import seven from "./../../../assets/seven.svg";
import eight from "./../../../assets/eight.svg";

const QuestionList = () => {
    return (
        <ul className="grid grid-cols-2 bg-grey10 border-[0.5px] border-grey15">
            <li className="bg-grey10 border-[0.5px] border-grey15 h-16"></li>
            <li className="bg-grey10 border-[0.5px] border-grey15 h-16"></li>

            <Question
                number={one}
                title="What services does SquareUp provide?"
                txt="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
                ></Question>
            <Question
                number={five}
                title="Do you offer ongoing support and maintenance after the project is completed?"
                txt="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
                ></Question>
            <Question
                number={two}
                title="How can SquareUp help my business?"
                txt="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
                ></Question>
            <Question
                number={six}
                title="Can you work with existing design or development frameworks?"
                txt="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
                ></Question>
            <Question
                number={three}
                title="What industries does SquareUp work with?"
                txt="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
                ></Question>
            <Question
                number={seven}
                title="How involved will I be in the project development process?"
                txt="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
                ></Question>
            <Question
                number={four}
                title="How long does it take to complete a project with SquareUp?"
                txt="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
                ></Question>
            <Question
                number={eight}
                title="Can you help with website or app maintenance and updates?"
                txt="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
                ></Question>

            <li className="bg-grey10 border-[0.5px] border-grey15 h-16"></li>
            <li className="bg-grey10 border-[0.5px] border-grey15 h-16"></li>
        </ul>
    )
}

export default QuestionList;