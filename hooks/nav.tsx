import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export const useCurrentNav = () => {
    const router = useRouter();
    return useMemo(() => {
        const currentLink = router.pathname.split("/")[1];
        const currentSubLink = router.asPath.split("#")[1];
        console.log("kör")
        return { currentLink, currentSubLink };
    }, [router.pathname, router.asPath])
}
