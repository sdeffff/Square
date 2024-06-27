
import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <footer className="w-full lg:pb-11 sm:pb-20 pt-11 px-2 md:px-5 2xl:px-32 xl:px-20 border-t-2 border-grey15">
            <FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
        </footer>
    )
}

export default Footer;