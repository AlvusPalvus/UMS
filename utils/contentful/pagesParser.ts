import { Section } from "../../types/Assemblies";
import { Footer, Header, NavLink, Navbar } from "../../types/Pages";
import { parseSection, parseNewsSection } from "./assembliesParser";
import { getContentfulClient } from "./client";
import { parseImage } from "./elementsParser";
import { parseContact, parseGallery } from "./topicsParser";

const client = getContentfulClient();

/**  Fetching a main page by entry ID from the contentful client */
export const getMainPage = async (id: string) => {
  const res = await client.getEntry(id, { include: 4 });

  let sectionsUnparsed = res.fields.sections;
  let sections: Section[] = [];
  if (sectionsUnparsed !== undefined) {
    sectionsUnparsed.map((section) => {
      if (section.sys.contentType.sys.id === "section") {
        sections.push(parseSection(section));
      } else if (section.sys.contentType.sys.id === "newsSection") {
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

export const parseNavbar = (navbar_res): Navbar => {
  const { logo, navigationItems } = navbar_res.fields;
  const navLinks = getLinks(navigationItems);
  return {
    logo: parseImage(logo),
    navigationItems: navLinks,
  };
};

const parseHeader = (page): Header => {
  const heroImage = page.fields.heroImage;
  const heroContent = page.fields.heroText;

  return {
    navbar: parseNavbar(page.fields.header),
    hero: {
      heroImage: parseImage(heroImage),
      heroContent,
    },
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
