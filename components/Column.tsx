import React from "react";
import { ContactItem, Field } from "../types/Topics";
import { Column as ColumnType } from "../types/Assemblies";

import Card from "./Card";
import PlainText from "./PlainText";
import Accordion from "./Accordion";
import ContactTable from "./ContactTable";

type Props = {
  column: ColumnType;
};

const getField = (component: Field) => {
  switch (component.displayType) {
    case "Accordion":
      return <Accordion accordion={component} />;

    case "Card":
      return <Card card={component} />;

    case "Plain Text":
      return <PlainText component={component} />;

    default:
      break;
  }
};

const Column = ({ column }: Props) => {
  return (
    <div
      className="column"
      style={{ backgroundColor: column.backgroundColor }}
      id={column.slug}
    >
      {column.components
        ? column.components.map((component) => {
            let field;
            if (component.type === "Field") {
              field = getField(component.parsedComponent as Field); //TODO fixa types
            } else if (component.type === "Contact") {
              field = (
                <ContactTable
                  contactInfo={component.parsedComponent as ContactItem}
                />
              );
            }
            return field || null;
          })
        : null}
    </div>
  );
};

export default Column;
