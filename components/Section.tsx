import { ReactElement } from "react";
import Card from "./Card";
import styles from "../styles/Components.module.css";
import Column from "./Column";
import { Column as ColumnType } from "../types/Assemblies";
import { Section as SectionType } from "../types/Assemblies";
import Link from "next/link";
// A section can have 1-3 columns.
const setUpColumns = (columns: ColumnType[]) => {
    // for each column create a column component
    // with grid style depending on number of columns

    if (columns == null) {
        return null;
    } else
        return (
            <div className="even-columns">
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

const Section = ({ heading, columns, backgroundColor }: SectionType) => {
    return (
        <section
            style={{ backgroundColor: "#" + backgroundColor }}
            className="container max-w-[1240px]"
        >
            {heading ? (
                <h2 className="fs-secondary-heading ">{heading}</h2>
            ) : null}
            <div className="container">{setUpColumns(columns)}</div>
        </section>
    );
};

export default Section;
