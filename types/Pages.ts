import { Contact, Person, Gallery } from "./Topics";
import { Column, Section } from "./Assemblies";
import { CfImage } from "./Elements";

export type MainPage = {
    header: Header;
    sections: Section[];
    footer: Footer;
};

export type DepartmentPage = {
    header: Header;
    department: string;
    description: string;
    contact: Contact;
    people: Person[];
    footer: Footer;
};

export type Header = {
    logo: CfImage;
    navigationItems: NavLink;
    heroImage: CfImage;
    heroContent: string;
};

export type NavLink = {
    title: string;
    link: string;
};

export type Footer = {
    sponsors: Gallery;
    contact: Contact;
    logo: CfImage;
    socials: Contact;
    backgroundImage: CfImage;
};
