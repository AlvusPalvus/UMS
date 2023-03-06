import { Section } from "../../types/Assemblies";
import { Footer, Header, NavLink } from "../../types/Pages";
import { parseSection, parseNewsSection } from "./assembliesParser";
import { getContentfulClient } from "./client";
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
    const heroImage = res.fields.heroImage;
    const heroContent = res.fields.heroText;
    const navLinks = getLinks(navigationItems);

    return {
        navbar: {
            logo: parseImage(logo),
            navigationItems: navLinks,
        },
        hero: {
            heroImage: parseImage(heroImage),
            heroContent,
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
const parseNavItem = (navItem): NavLink => {
    let subPages;
    if (navItem.fields.subpages !== undefined) {
        subPages = navItem.fields.subpages.map((item) => parseNavItem(item));
    } else {
        subPages = null;
    }
    return {
        link: navItem.fields.link,
        title: navItem.fields.pageTitle,
        sublinks: subPages,
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
        sponsors: parseGallery(sponsors),
        contact: parseContact(contact),
        logo: parseImage(logo),
        socials: parseContact(socials),
        backgroundImage: parseImage(backgroundImage),
    };
};
