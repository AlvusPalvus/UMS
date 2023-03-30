import { Contact, Gallery } from "./Topics";
import { Section } from "./Assemblies";
import { CfImage } from "./Elements";

export type Page = {
  header: Header;
  sections: Section[];
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
