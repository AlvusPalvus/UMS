import { Document } from "@contentful/rich-text-types";

export type Section = {
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
  parsedComponent: Card | Post; // Cards, posts, gallery, contact
};

export type Card = {
  heading?: string;
  body: Document;
  buttons?: Button[];
  backgroundColor?: string;
};

export type Post = {
  heading?: string;
  body: Document;
  buttons?: Button[];
};

export type Button = {
  text: string;
  link: string;
};
