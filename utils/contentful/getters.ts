// import { getContentfulClient } from "./client";
// import * as types from "../../types/Topics";
// import { Footer, Header, NavLink } from "../../types/Pages";
// import { Section } from "../../types/Assemblies";
// import { CfImage } from "../../types/Elements";

// const client = getContentfulClient();

// /**  Fetching a main page by entry ID from the contentful client */
// export const getMainPage = async (id: string) => {
//     const res = await client.getEntry(id, { include: 4 });
//     let sections_unparsed = res.fields.sections;
//     let sections = [];
//     if (sections_unparsed != undefined) {
//         sections_unparsed.map((section) => {
//             if (section.sys.contentType.sys.id == "section") {
//                 sections.push(parseSection(section));
//             }
//         });
//     } else sections = null;
//     const footer = parseFooter(res);
//     const header = parseHeader(res);
//     console.log(header.navbar.navigationItems);

//     //console.log(sections);
//     return {
//         header,
//         sections,
//         footer,
//     };
// };

// const parseHeader = (res): Header => {
//     const { logo, navigationItems } = res.fields.header.fields;
//     const navbar = getLinks(navigationItems);
//     const heroImage = res.fields.heroImage;
//     const heroText = res.fields.heroText;

//     return {
//         navbar: {
//             logo,
//             navigationItems,
//         },
//         heroImage,
//         heroContent: heroText,
//     };
// };

// const parseFooter = (res): Footer => {
//     const { sponsors, contact, logo, socials, backgroundImage } =
//         res.fields.footer.fields;

//     console.log(contact);
//     const sponsorLogos = sponsors.fields.images.map((image) => {
//         return image.fields.file;
//     });

//     return {
//         sponsors,
//         contact,
//         logo: parseImage(logo),
//         socials,
//         backgroundImage: parseImage(backgroundImage),
//     };
// };

// const parseSection = (section) => {
//     let { heading, columns, backgroundColor } = section.fields;

//     if (columns !== undefined) {
//         columns = columns.map((column) => parseColumn(column));
//     } else columns = null;

//     if (heading == undefined) {
//         heading = null;
//     }
//     if (backgroundColor == undefined) {
//         backgroundColor = null;
//     }

//     const parsedSection: Section = { heading, columns, backgroundColor };
//     return parsedSection;
// };

// const parseColumn = (column) => {
//     let { heading, components, backgroundColor } = column.fields;
//     if (components !== undefined) {
//         components = components.map((component) => parseComponent(component));
//     } else components = null;

//     if (heading == undefined) {
//         heading = null;
//     }

//     if (backgroundColor == undefined) {
//         backgroundColor = null;
//     }

//     return {
//         heading,
//         components,
//         backgroundColor,
//     };
// };

// const parseComponent = (component) => {
//     const type = component.sys.contentType.sys.id;
//     let parsedComponent;
//     if (type == "card") {
//         parsedComponent = parseCard(component);
//     } else parsedComponent = null; // Do this for all the differnet kinds of components

//     return {
//         type,
//         parsedComponent,
//     };
// };

// const parseCard = (card) => {
//     let { heading, bodyText, buttons } = card.fields;
//     if (buttons !== undefined) {
//         buttons = buttons.map((button) => {
//             const text = button.fields.buttonText;
//             const link = button.fields.link;
//             return { text, link };
//         });
//     } else buttons == null;

//     if (heading == undefined) {
//         heading = null;
//     }
//     return {
//         heading,
//         bodyText,
//         buttons,
//     };
// };

// const parseImage = (image): CfImage => {
//     return {
//         url: image.fields.file.url,
//         width: image.fields.file.details.width,
//         height: image.fields.file.details.height,
//         filename: image.fields.title,
//     };
// };
