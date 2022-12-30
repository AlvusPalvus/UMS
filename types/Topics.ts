import { Document } from "@contentful/rich-text-types";
import { CfImage, CfLink } from "./Elements";

export type Field = {
    displayType: Card | PlainText | Accordion;
    heading?: string;
    body: Document;
    buttons?: CfLink[];
    backgroundColor?: string;
};

export type Gallery = {
    heading: string;
    images: CfImage[];
};

export type Card = "Card";
export type PlainText = "Plain Text";
export type Accordion = "Accordion";

export type Contact = {
    heading?: string;
    text?: string;
    contactItem: ContactItem;
};

export type ContactItem = {
    email?: string;
    phone?: string;
    adress?: string;
    facebook?: string;
    instagram?: string;
};

export type News = {};
export type Events = {};
export type Person = {};
