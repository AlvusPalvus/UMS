import { ReactElement } from "react";
import Card from "./Card";
import styles from "../styles/Components.module.css";
import Column from "./Column";
import { Column as ColumnType } from "../types/Assemblies";
import { Section as SectionType } from "../types/Assemblies";
import Slider from "./News/Slider";

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

type Props = {
    section: SectionType;
};

const Section = ({ section }: Props) => {
    if (section.type === "newsSection") {
        return <Slider section={section} />;
    } else if (section.type === "section") {
        return (
            <section
                //style={{ backgroundColor: "#" + section.backgroundColor }}
                className="container max-w-[1240px]"
            >
                {section.heading ? (
                    <h2 className="fs-secondary-heading ">{section.heading}</h2>
                ) : null}
                <div className="container">{setUpColumns(section.columns)}</div>
            </section>
        );
    }
};

export default Section;
