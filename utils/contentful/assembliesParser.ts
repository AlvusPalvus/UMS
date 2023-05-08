import {
    Column,
    EventsSection,
    NewsSection,
    StandardSection,
} from "../../types/Assemblies";
import { NewsCard, EventCard } from "../../types/Topics";
import { parseCfImage } from "./elementsParser";
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

export const parseColumn = (column): Column => {
    let { components, backgroundColor, slug, displayType } = column.fields;
    if (components !== undefined) {
        components = components.map((component) => parseComponent(component));
    } else components = null;

    if (displayType !== "Accordion" && displayType !== "Card") {
        displayType = "Plain Text";
    }

    return {
        components: components || null,
        backgroundColor: backgroundColor || null,
        slug: slug || null,
        displayType,
    };
};

export const parseNewsSection = (section): NewsSection => {
    let { title, slug, newsCards, featuredImage } = section.fields;
    if (newsCards !== undefined) {
        newsCards = newsCards.map((card) => parseNewsCard(card));
    } else newsCards = null;
    let image;
    featuredImage !== undefined
        ? (image = parseCfImage(featuredImage))
        : (image = null);

    return {
        type: "newsSection",
        slug: slug || null,
        heading: title,
        news: newsCards,
        image: image,
    };
};

export const parseNewsCard = (card): NewsCard => {
    let { heading, slug, date, body, previewText, featuredImage } = card.fields;
    featuredImage !== "undefined"
        ? (featuredImage = parseCfImage(featuredImage))
        : (featuredImage = null);

    return {
        slug: slug,
        heading: heading,
        date: date,
        body: body || null,
        preview: previewText || null,
        image: featuredImage || null,
    };
};

export const parseEventsSection = (section): EventsSection => {
    let { slug, heading, events, bodyText, featuredImage } = section.fields;
    if (events !== undefined) {
        events = events.map((card) => parseEventCard(card));
    } else events = null;
    let image = featuredImage ? parseCfImage(featuredImage) : null;

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
    dateAndTime = dateAndTime.split("T");
    featuredImage !== "undefined"
        ? (featuredImage = parseCfImage(featuredImage))
        : (featuredImage = null);

    return {
        slug: slug,
        heading: heading,
        date: dateAndTime[0],
        time: dateAndTime[1],
        body: bodyText || null,
        image: featuredImage,
    };
};
