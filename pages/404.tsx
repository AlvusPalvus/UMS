// pages/404.js

import Link from "next/link";
import Hero from "../components/Header/Hero";
import Navbar from "../components/Header/Navbar";
import { Navbar as NavbarType } from "../types/Pages";
import { getContentfulClient } from "../utils/client";
import {
    parseNavbar,
    parseNavbarWithClient,
} from "../utils/contentful/pagesParser";

export const getStaticProps = async () => {
    const client = getContentfulClient();
    const navbar = await parseNavbarWithClient(client);

    return {
        props: { navbar },
    };
};

type Props = {
    navbar: NavbarType;
};

export default function Custom404({ navbar }: Props) {
    const hero = {
        heroImage: null,
        heroContent: null,
    };
    return (
        <>
            <Hero hero={hero} navbar={navbar} idFirstSection="noId" />
            <div className="container ">
                <h1 className="h2">404 - Sidan kunde inte hittas </h1>
                <Link className="button" href={"/"}>
                    Till startsidan
                </Link>
            </div>
        </>
    );
}
