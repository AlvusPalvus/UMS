import { Document } from "@contentful/rich-text-types";
import { CfImage } from "./Elements";
import { Field, Gallery, Events, NewsCard, Contact } from "./Topics";

export type Section = StandardSection | NewsSection;

export type StandardSection = {
  type: "section";
  slug: string;
  heading?: string;
  columns: Column[];
  backgroundColor?: string;
};

export type NewsSection = {
  type: "newsSection";
  heading?: string;
  news: NewsCard[];
  image: CfImage;
};

export type Column = {
  heading?: string;
  slug: string;
  components: Component[];
  backgroundColor?: string;
};

export type Component = {
  type: "Field" | "Gallery" | "Events" | "Contact";
  parsedComponent: Field | Gallery | Events | Contact;
};
