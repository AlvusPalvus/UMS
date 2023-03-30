import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export const useCurrentNav = () => {
    const router = useRouter();
    return useMemo(() => {
        const currentLink = router.pathname.split("/")[1];
        const currentSubLink = router.asPath.split("#")[1];
        return { currentLink, currentSubLink };
    }, [router.pathname, router.asPath])
}


export const useNavScrollStyling = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const colorChange = () => {
            if (window.scrollY >= 90) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        colorChange();
        window.addEventListener("scroll", colorChange);
        return () => window.removeEventListener("scroll", colorChange);
    }, []);

    // Scrollbased styling

    let backgroundColor = scrolled ? "bg-white" : "bg-transparent";
    let textColor = scrolled ? "text-black" : "text-white";
    let dropDownBgColor = scrolled ? " bg-white" : " bg-black ";
    let hoverColor = scrolled
        ? " hover:bg-primaryGreen hover:text-white "
        : " hover:bg-white  hover:text-black ";
    let margin = scrolled ? "" : "m-4";
    return {
        backgroundColor,
        textColor,
        dropDownBgColor,
        hoverColor,
        margin,
        scrolled
    };
}