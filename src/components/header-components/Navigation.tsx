import NavComponent from "./NavComponent";

const Navigation = () => {
    return (
        <ul className="text-[1.1rem] font-normal barlow-normal lg:flex gap-1 mobile:hidden">
            <NavComponent page="/" txt="Home"></NavComponent>
            <NavComponent page="services" txt="Services"></NavComponent>
            <NavComponent page="works" txt="Work"></NavComponent>
            <NavComponent page="process" txt="Process"></NavComponent>
            <NavComponent page="/about" txt="About"></NavComponent>
            <NavComponent page="/career" txt="Careers"></NavComponent>
        </ul>
    )
}

export default Navigation;