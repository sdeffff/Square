//Using framer motion to apply transition between pages:
import { motion } from "framer-motion";
import { ComponentType } from "react";

//Setting React Component as argument here
const transition = (Component: ComponentType<any>) => {
    return (props: any) => (
        <>
            <Component {...props} /> {/* Applying props for the component if the component has them */}
            <motion.div
                className="slide-in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.70, ease: [0.35, 1, 0.35, 1] }}
            />
            <motion.div 
                className="slide-out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.702, ease: [0.35, 1, 0.35, 1] }}
            />
        </>
    )
}

export default transition;