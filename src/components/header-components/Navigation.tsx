import NavComponent from "./NavComponent";

const Navigation = () => {
        return (
        <ul className="text-[1.1rem] font-normal barlow-normal lg:flex gap-1 mobile:hidden">
            <NavComponent page="/Square/" txt="Home"></NavComponent>
            <NavComponent page="Square/services" txt="Services"></NavComponent>
            <NavComponent page="Square/works" txt="Work"></NavComponent>
            <NavComponent page="Square/process" txt="Process"></NavComponent>
            <NavComponent page="Square/about" txt="About"></NavComponent>
            <NavComponent page="Square/career" txt="Careers"></NavComponent>
        </ul>
    )
}

export default Navigation;

