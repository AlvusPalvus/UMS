import { Document } from "@contentful/rich-text-types";
import { CfImage } from "./Elements";
import {
    Field,
    Gallery,
    Person,
    Contact,
    EventCard,
    NewsCard,
    ImageComponent,
} from "./Topics";

export type Section = StandardSection | NewsSection | EventsSection;

export type StandardSection = {
    type: "section";
    slug: string;
    heading?: string;
    columns: Column[];
    backgroundColor?: string;
};

export type NewsSection = {
    type: "newsSection";
    slug: string;
    heading?: string;
    news: NewsCard[];
    image: CfImage;
};

export type EventsSection = {
    type: "eventsSection";
    slug: string;
    heading?: string;
    body: string;
    events: EventCard[];
    image: CfImage;
};

export type Column = {
    slug: string;
    components: Component[];
    backgroundColor?: string;
    displayType: "Accordion" | "Card" | "Plain Text";
};

export type Component = {
    type: "Column" | "Field" | "Gallery" | "Person" | "Contact" | "Image";
    parsedComponent:
        | Column
        | Field
        | Gallery
        | Person
        | Contact
        | ImageComponent;
};
