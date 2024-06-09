import CareerCard from "./CareerCard"

const CareerList = () => {
    return (
        <ul className="grid grid-cols-2">
            <CareerCard
            title="Innovative and Impactful Projects"
            txt="At SquareUp, you'll have the opportunity to work on exciting and impactful 
            projects that shape the digital landscape. From designing intuitive user interfaces 
            to developing robust software solutions, you'll be part of a team that creates products 
            that make a difference."></CareerCard>

            <CareerCard
            title="Supportive Environment"
            txt="At SquareUp, you'll have the opportunity to work on exciting and impactful 
            projects that shape the digital landscape. From designing intuitive user interfaces 
            to developing robust software solutions, you'll be part of a team that creates products 
            that make a difference."></CareerCard>

            <CareerCard
            title="Continuous Learning and Growth"
            txt="We believe in investing in our team's growth and development. 
            We provide opportunities for continuous learning, whether it's through workshops, 
            training programs, or attending industry conferences. At SquareUp, you'll have the 
            chance to expand your skill set and stay up-to-date with the latest trends and 
            technologies."></CareerCard>

            <CareerCard
            title="Challenging and Rewarding Work"
            txt="Our projects are challenging, but the rewards are even greater. We tackle complex 
            problems and push ourselves to deliver innovative solutions. You'll be empowered to take 
            ownership of your work, make a real impact, and see your ideas come to life."></CareerCard>
        </ul>
    )
}

export default CareerList;