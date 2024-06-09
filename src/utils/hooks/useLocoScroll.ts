import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';

export default function useLocoScroll() {
    useEffect(() => {
        const scrollEl = document.querySelector<HTMLElement>(".main-container");

        if (!scrollEl) {
            return;
        }

        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            lerp: 0.08,
        });

        // Cleanup function
        return () => {
            locoScroll.destroy();
        };
    }, []);
}