
import FooterTop from "./FooterTop"
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <footer className="w-full py-11 2xl:px-32 xl:px-20 md:px-3 border-t-2 border-grey15">
            <FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
        </footer>
    )
}

export default Footer;