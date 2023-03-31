import {
  Column,
  EventsSection,
  NewsSection,
  StandardSection,
} from "../../types/Assemblies";
import { NewsCard, EventCard } from "../../types/Topics";
import { parseImage } from "./elementsParser";
import { parseComponent } from "./topicsParser";

export const parseSection = (section): StandardSection => {
  let { slug, heading, columns, backgroundColor } = section.fields;

  if (columns !== undefined) {
    columns = columns.map((column) => parseColumn(column));
  } else columns = null;

  return {
    type: "section",
    slug: slug || null,
    heading: heading || null,
    columns,
    backgroundColor: backgroundColor || null,
  };
};

const parseColumn = (column): Column => {
  let { components, backgroundColor, slug } = column.fields;
  if (components !== undefined) {
    components = components.map((component) => parseComponent(component));
  } else components = null;

  return {
    components: components || null,
    backgroundColor: backgroundColor || null,
    slug: slug || null,
  };
};

export const parseNewsSection = (section): NewsSection => {
  let { title, slug, newsCards, featuredImage } = section.fields;
  if (newsCards !== undefined) {
    newsCards = newsCards.map((card) => parseNewsCard(card));
  } else newsCards = null;
  let image = parseImage(featuredImage);

  return {
    type: "newsSection",
    slug: slug || null,
    heading: title,
    news: newsCards,
    image: image,
  };
};

export const parseNewsCard = (card): NewsCard => {
  let { heading, slug, date, bodyText, featuredImage } = card.fields;
  featuredImage !== "undefined"
    ? (featuredImage = parseImage(featuredImage))
    : (featuredImage = null);

  return {
    slug: slug,
    heading: heading,
    date: date,
    body: bodyText || null,
    image: featuredImage || null,
  };
};

export const parseEventsSection = (section): EventsSection => {
  let { slug, heading, events, bodyText, featuredImage } = section.fields;
  if (events !== undefined) {
    events = events.map((card) => parseEventCard(card));
  } else events = null;
  let image = featuredImage ? parseImage(featuredImage) : null;

  return {
    type: "eventsSection",
    slug,
    heading: heading || null,
    body: bodyText || null,
    events: events,
    image: image,
  };
};

export const parseEventCard = (card): EventCard => {
  let { heading, slug, dateAndTime, bodyText, featuredImage } = card.fields;
  featuredImage !== "undefined"
    ? (featuredImage = parseImage(featuredImage))
    : (featuredImage = null);

  return {
    slug: slug,
    heading: heading,
    date: dateAndTime,
    time: dateAndTime,
    body: bodyText || null,
    image: featuredImage,
  };
};
