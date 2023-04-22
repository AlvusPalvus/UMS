import { Section } from "../../types/Assemblies";
import { Footer, Header, NavLink } from "../../types/Pages";
import {
    parseSection,
    parseNewsSection,
    parseEventsSection,
} from "./assembliesParser";
import { getContentfulClient } from "../client";
import { parseImage } from "./elementsParser";
import { parseContact, parseGallery } from "./topicsParser";

const client = getContentfulClient();

/**  Fetching a main page by entry ID from the contentful client */
export const getMainPage = async (id: string) => {
    const res = await client.getEntry(id, { include: 4 });

    let sectionsUnparsed = res.fields.sections;
    let sections = [];
    if (sectionsUnparsed !== undefined) {
        sectionsUnparsed.map((section) => {
            if (section.sys.contentType.sys.id == "section") {
                sections.push(parseSection(section));
            }
            if (section.sys.contentType.sys.id == "newsSection") {
                sections.push(parseNewsSection(section));
            }
            if (section.sys.contentType.sys.id == "eventsSection") {
                sections.push(parseEventsSection(section));
            }
        });
    } else sections = null;

    return {
        header: parseHeader(res),
        sections,
        footer: parseFooter(res),
    };
};

const parseHeader = (res): Header => {
    const { logo, navigationItems } = res.fields.header.fields;
    let heroImage = res.fields.heroImage;
    if (heroImage !== undefined) {
        heroImage = parseImage(heroImage);
    }

    const heroContent = res.fields.heroText;
    const navLinks = getLinks(navigationItems);

    return {
        navbar: {
            logo: parseImage(logo),
            navigationItems: navLinks,
        },
        hero: {
            heroImage: heroImage || null,
            heroContent: heroContent || "",
        },
    };
};

export const parseNavbar = async () => {
    const res = await client.getEntries(
        { content_type: "header" },
        { include: 4 }
    );

    const nav_res = await client.getEntry(res.items[0].sys.id, { include: 4 });
    console.log(nav_res);
    const { logo, navigationItems } = nav_res.fields;
    const navLinks = getLinks(navigationItems);

    return {
        logo: parseImage(logo),
        navigationItems: navLinks,
    };
};

export const parseNavbarWithClient = async (client) => {
    const res = await client.getEntries(
        { content_type: "header" },
        { include: 4 }
    );

    const nav_res = await client.getEntry(res.items[0].sys.id, { include: 4 });
    console.log(nav_res);
    const { logo, navigationItems } = nav_res.fields;
    const navLinks = getLinks(navigationItems);

    return {
        logo: parseImage(logo),
        navigationItems: navLinks,
    };
};

const parseNavItem = (navItem): NavLink => {
    let subLinks;
    if (navItem.fields.subpages !== undefined) {
        subLinks = navItem.fields.subpages.map((item) => parseNavItem(item));
    } else {
        subLinks = null;
    }
    return {
        link: navItem.fields.link,
        title: navItem.fields.pageTitle,
        sublinks: subLinks,
    };
};

const getLinks = (navigationItems): NavLink[] => {
    const links = navigationItems.map((navItem) => parseNavItem(navItem));
    return links;
};
const parseFooter = (res): Footer => {
    const { sponsors, contact, logo, socials, backgroundImage } =
        res.fields.footer.fields;

    return {
        sponsors: sponsors === undefined ? parseGallery(sponsors) : null,
        contact: parseContact(contact),
        logo: parseImage(logo),
        socials: parseContact(socials),
        backgroundImage: parseImage(backgroundImage),
    };
};
