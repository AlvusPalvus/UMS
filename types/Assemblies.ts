import { Document } from "@contentful/rich-text-types";
import { CfImage } from "./Elements";
import { Field, Gallery, Person, Contact, EventCard, NewsCard } from "./Topics";

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

export type EventsSection = {
  type: "eventsSection";
  heading?: string;
  body: string;
  events: EventCard[];
  image: CfImage;
};

export type Column = {
  slug: string;
  components: Component[];
  backgroundColor?: string;
};

export type Component = {
  type: "Field" | "Gallery" | "Person" | "Contact";
  parsedComponent: Field | Gallery | Person | Contact;
};
