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
    navbar: Navbar;
    hero: Hero;
};

export type Navbar = {
    logo: CfImage;
    navigationItems: NavLink[];
};
export type Hero = {
    heroImage: CfImage;
    heroContent: string;
};

export type NavLink = {
    title: string;
    link: string;
    sublinks?: NavLink[];
};

export type Footer = {
    sponsors: Gallery;
    contact: Contact;
    logo: CfImage;
    socials: Contact;
    backgroundImage: CfImage;
};
