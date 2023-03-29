import {
  Column,
  NewsSection,
  Section,
  StandardSection,
} from "../../types/Assemblies";
import { NewsCard } from "../../types/Topics";
import { parseImage } from "./elementsParser";
import { parseComponent } from "./topicsParser";

// TODO: Implement correct sections parser
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
  let { heading, components, backgroundColor, slug } = column.fields;
  if (components !== undefined) {
    components = components.map((component) => parseComponent(component));
  } else components = null;

  return {
    heading: heading || null,
    components: components || null,
    backgroundColor: backgroundColor || null,
    slug: slug || null,
  };
};

export const parseNewsSection = (section): NewsSection => {
  let { title, newsCards, featuredImage } = section.fields;
  if (newsCards !== undefined) {
    newsCards = newsCards.map((card) => parseNewsCard(card));
  } else newsCards = null;
  let image = parseImage(featuredImage);

  return {
    type: "newsSection",
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
    body: bodyText,
    image: featuredImage || null,
  };
};
