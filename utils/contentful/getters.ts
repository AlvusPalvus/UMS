import { getContentfulClient } from "./client";
import {
  Section as SectionType,
  Column as ColumnType,
  Component as ComponentType,
  Card as CardType,
} from "../../types/Card";

const client = getContentfulClient();

/**  Fetching a main page by entry ID from the contentful client */
export const getMainPage = async (id: string) => {
  const res = await client.getEntry(id, { include: 4 });
  let sections_unparsed = res.fields.sections;
  let sections = [];
  if (sections_unparsed != undefined) {
    sections_unparsed.map((section) => {
      if (section.sys.contentType.sys.id == "section") {
        sections.push(parseSection(section));
      }
    });
  } else sections = null;
  const footer = parseFooter(res);
  const header = parseHeader(res);

  //console.log(sections);
  return {
    header,
    sections,
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

  const sponsorLogos = sponsors.fields.images.map((image) => {
    return image.fields.file;
  });

  return {
    sponsors: {
      heading: sponsors.fields.heading,
      sponsorLogos,
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
  let { heading, columns, backgroundColor } = section.fields;

  if (columns !== undefined) {
    columns = columns.map((column) => parseColumn(column));
  } else columns = null;

  if (heading == undefined) {
    heading = null;
  }
  if (backgroundColor == undefined) {
    backgroundColor = null;
  }

  const parsedSection: SectionType = { heading, columns, backgroundColor };
  return parsedSection;
};

const parseColumn = (column) => {
  let { heading, components, backgroundColor } = column.fields;
  if (components !== undefined) {
    components = components.map((component) => parseComponent(component));
  } else components = null;

  if (heading == undefined) {
    heading = null;
  }

  if (backgroundColor == undefined) {
    backgroundColor = null;
  }

  return {
    heading,
    components,
    backgroundColor,
  };
};

const parseComponent = (component) => {
  const type = component.sys.contentType.sys.id;
  let parsedComponent;
  if (type == "card") {
    parsedComponent = parseCard(component);
  } else parsedComponent = null; // Do this for all the differnet kinds of components

  return {
    type,
    parsedComponent,
  };
};

const parseCard = (card) => {
  let { heading, bodyText, buttons } = card.fields;
  if (buttons !== undefined) {
    buttons = buttons.map((button) => {
      const text = button.fields.buttonText;
      const link = button.fields.link;
      return { text, link };
    });
  } else buttons == null;

  if (heading == undefined) {
    heading = null;
  }
  return {
    heading,
    bodyText,
    buttons,
  };
};