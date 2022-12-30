import { Document } from "@contentful/rich-text-types";
import { Field, Gallery, Events, News, Contact } from "./Topics";

export type Section = {
    heading?: string;
    columns: Column[];
    backgroundColor?: string;
};

export type Column = {
    heading?: string;
    components: Component[];
    backgroundColor?: string;
};

export type Component = {
    type: "Field" | "Gallery" | "News" | "Events" | "Contact";
    parsedComponent: Field | Gallery | News | Events | Contact;
};
