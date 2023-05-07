import { Document } from "@contentful/rich-text-types";
import { CfImage, CfLink } from "./Elements";

export type Field = {
    displayType: Card | PlainText | Accordion;
    slug: string;
    heading?: string;
    body: Document;
    buttons?: CfLink[];
    assets: string[];
    backgroundColor?: string;
};

export type Gallery = {
    heading: string;
    images: CfImage[];
};

export type ImageComponent = {
    image: CfImage;
    displaySettings: string;
};

export type Card = "Card";
export type PlainText = "Plain Text";
export type Accordion = "Accordion";

export type Contact = {
    heading?: string;
    text?: string;
    contactItems: ContactItem;
};

export type Person = {
    name: string;
    role: string;
    profileImage: CfImage;
    contact: Contact;
};

export type ContactItem = {
    email?: string;
    phone?: string;
    adress?: string;
    facebook?: string;
    instagram?: string;
    adressLink?: string;
    facebookLink?: string;
    instagramLink?: string;
};

export type NewsCard = {
    slug: string;
    heading: string;
    date: string;
    body: string;
    preview: string;
    image?: CfImage;
};
export type EventCard = {
    slug: string;
    heading: string;
    date: string;
    time: string;
    body: string;
    image: CfImage;
    host?:
        | "Kårstyrelsen"
        | "Festmästeriet"
        | "Sportmästeriet"
        | "Kårhuset Villan";
};
