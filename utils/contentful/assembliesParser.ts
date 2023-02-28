import { Section } from "../../types/Assemblies";
import { parseComponent } from "./topicsParser";

// TODO: Implement correct sections parser
export const parseSection = (section): Section => {
    console.log(section);
    let { heading, columns, backgroundColor } = section.fields;

    if (columns !== undefined) {
        columns = columns.map((column) => parseColumn(column));
    } else columns = null;

    return {
        heading: heading || null,
        columns,
        backgroundColor: backgroundColor || null,
    };
};

const parseColumn = (column) => {
    let { heading, components, backgroundColor } = column.fields;
    if (components !== undefined) {
        components = components.map((component) => parseComponent(component));
    } else components = null;

    return {
        heading: heading || null,
        components,
        backgroundColor: backgroundColor || null,
    };
};

export const parseNewsSection = (section): Section => {
    console.log(section);
    let { heading, columns, backgroundColor } = section.fields;

    if (columns !== undefined) {
        columns = columns.map((column) => parseColumn(column));
    } else columns = null;

    return {
        heading: heading || null,
        columns,
        backgroundColor: backgroundColor || null,
    };
};
