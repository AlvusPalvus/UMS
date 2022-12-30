import { Section } from "../../types/Assemblies";
import { Footer } from "../../types/Pages";
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
    if (sectionsUnparsed != undefined) {
        sectionsUnparsed.map((section) => {
            if (section.sys.contentType.sys.id == "section") {
                sections.push(parseSection(section));
            }
        });
    } else sections = null;

    const f = parseFooter(res);
    console.log(f);
    return {
        header: {}, //parseHeader(res),
        sections: {},
        footer: f,
    };
};

const parseHeader = (res) => {
    const { logo, navigationItems } = res.fields.header.fields;
    const logoSrc = logo.fields.file.url;
    const heroSrc = res.fields.heroImage.fields.file.url;
    const heroText = res.fields.heroText;

    return {
        navbar: {
            logoSrc,
            navigationItems,
        },
        heroSrc,
        heroText,
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
