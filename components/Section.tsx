import { ReactElement } from "react";
import Card from "./Card";
import styles from "../styles/Components.module.css";
import Column from "./Column";
import { Column as ColumnType } from "../types/Topics";
import { Section } from "../types/Topics";
// A section can have 1-3 columns.
const setUpColumns = (columns: ColumnType[]) => {
    // for each column create a column component
    // with grid style depending on number of columns

    return (
        <div>
            {columns.map((column) => (
                <Column
                    heading={column.heading}
                    components={column.components}
                    backgroundColor={column.backgroundColor}
                />
            ))}
        </div>
    );
};

const Section = ({ heading, columns, backgroundColor }: Section) => {
    return (
        <div>
            <h2>{heading}</h2>
            {setUpColumns(columns)}
        </div>
    );
};

export default Section;
