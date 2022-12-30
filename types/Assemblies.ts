import { Document } from "@contentful/rich-text-types";
import { Field, Gallery, Events, News, Contact } from "./Topics";

export type Section = {
    type: string;
    heading: string;
    columns: Column[]; // array of columns
    backgroundColor: string;
};

export type Column = {
    heading: string;
    components: Component[];
    backgroundColor?: string;
};

export type Component = {
    type: string;
    parsedComponent: Field | Gallery | News | Events | Contact;
};
