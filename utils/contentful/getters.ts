import { ContentfulClientApi } from "contentful";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { getContentfulClient } from "./client";

// export type NavigationItem = {
//     parentPage: string,
//     children: string[]
// }
// export type Header = {
//     logoUrl: string,
//     navigationItems: []
// }

// export type MainPage = {
//     header: Header
//     sections:
// }

const client = getContentfulClient();

/**  Fetching a main page by entry ID from the contentful client */
export const getMainPage = async (id: string) => {
  const res = await client.getEntry(id, { include: 4 });
  let sections_unparsed = res.fields.sections;
  let sections = [];
  sections = sections_unparsed.map((section) => parseSection(section));
  const footer = parseFooter(res);
  const header = parseHeader(res);

  return {
    sections,
    header,
    footer,
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

const parseFooter = (res) => {
  const { sponsors, contact, logo, socials, footerImage } =
    res.fields.footer.fields;
  const logoSrc = logo.fields.file.url;
  const footerImageSrc = footerImage.fields.file.url;
  const sponsorLogosSrc = sponsors.fields.images.map(
    (image) => image.fields.file.url
  );

  return {
    sponsors: {
      heading: sponsors.fields.heading,
      sponsorLogosSrc,
    },
    logoSrc,
    footerImageSrc,
    contact: {
      heading: contact.fields.heading,
      subHeading: contact.fields.bodyText,
      items: contact.fields.items,
    },
    socials: {
      heading: socials.fields.heading,
      items: socials.fields.items,
    },
  };
};

const parseSection = (section) => {
  let { featuredImage, featuredContent, cards } = section.fields;
  let featuredImageUrl = null;
  let tableCard = null;
  let galleryComponent = null;
  let contactInformation = null;

  if (featuredImage !== undefined) {
    featuredImageUrl = featuredImage.fields.file.url;
  }
  if (cards !== undefined) {
    cards = cards.map((card) => parseCard(card));
  } else cards = null;
  if (featuredContent !== undefined) {
    const { heading, bodyText, buttons, files } = featuredContent.fields;
    featuredContent = { heading, bodyText, buttons, files };
  } else featuredContent = null;

  return {
    featuredImageUrl,
    featuredContent,
    cards,
    tableCards: tableCard,
    galleries: galleryComponent,
    contact: contactInformation,
  };
};
const parseCard = (card) => {
  let { heading, body, buttons } = card.fields;
  if (buttons !== undefined) {
    buttons = buttons.map((button) => {
      const text = button.fields.buttonText;
      const link = button.fields.link;
      return { text, link };
    });
  } else buttons == null;
  return {
    heading,
    body,
    buttons,
  };
};
