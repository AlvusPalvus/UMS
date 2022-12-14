import { ReactElement } from "react";
import Card from "./Card";
import styles from "../styles/Components.module.css";
import Column from "./Column";
type ColumnContent = {
  heading: string;
  components: [
    {
      type: string;
      parsedComponent: any;
    }
  ];
  backgroundColor: string;
};

type Props = {
  heading: string;
  columns: [ColumnContent]; // array of column components
  backgroundColor: string;
};

// A section can have 1-3 columns.
const setUpColumns = (columns: [ColumnContent]) => {
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

const Section = ({ heading, columns, backgroundColor }: Props) => {
  return (
    <div>
      <h2>{heading}</h2>
      {setUpColumns(columns)}
    </div>
  );
};

export default Section;
