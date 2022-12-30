import { Section } from "../../types/Assemblies";
import { parseField } from "./topicsParser";

// TODO: Implement correct sections parser
export const parseSection = (section): Section => {
    let { heading, columns, backgroundColor } = section.fields;

    if (columns !== undefined) {
        columns = columns.map((column) => parseColumn(column));
    } else columns = null;

    if (heading == undefined) {
        heading = null;
    }
    if (backgroundColor == undefined) {
        backgroundColor = null;
    }

    const parsedSection = { heading, columns, backgroundColor };
    return {
        type: "",
        heading,
        columns,
        backgroundColor,
    };
};

const parseColumn = (column) => {
    let { heading, components, backgroundColor } = column.fields;
    if (components !== undefined) {
        components = components.map((component) => parseField(component));
    } else components = null;

    if (heading == undefined) {
        heading = null;
    }

    if (backgroundColor == undefined) {
        backgroundColor = null;
    }

    return {
        heading,
        components,
        backgroundColor,
    };
};
