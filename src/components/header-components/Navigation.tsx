import NavComponent from "./NavComponent";

const Navigation = () => {
        return (
        <ul className="text-[1.1rem] font-normal barlow-normal lg:flex gap-1 mobile:hidden">
            <NavComponent page="/Square/" txt="Home" />
            <NavComponent page="Square/services" txt="Services" />
            <NavComponent page="Square/works" txt="Work" />
            <NavComponent page="Square/process" txt="Process" />
            <NavComponent page="Square/about" txt="About" />
            <NavComponent page="Square/career" txt="Careers" />
        </ul>
    )
}

export default Navigation;

