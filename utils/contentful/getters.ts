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
  const sections = res.fields.sections;
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
