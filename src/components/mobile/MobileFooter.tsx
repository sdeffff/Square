import MobileFooterList from "./MobileFooterList";

const MobileFooter = () => {
    return (
        <footer className="fixed bottom-0 left-0 bg-[#191919] lg:hidden w-full py-3 z-50">
            <MobileFooterList></MobileFooterList>
        </footer>   
    )
}

export default MobileFooter;