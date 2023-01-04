import { Section } from "../../types/Assemblies";
import { Footer, Header } from "../../types/Pages";
import { parseSection } from "./assembliesParser";
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

    return {
        navbar: {
            logo: parseImage(logo),
            navigationItems,
        },
        heroImage: parseImage(heroImage),
        heroContent,
    };
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
