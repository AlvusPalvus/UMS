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
      return (
        <Accordion
          heading={component.heading}
          body={component.body}
          buttons={component.buttons}
          backgroundColor={component.backgroundColor}
          displayType={component.displayType}
        />
      );

    case "Card":
      return (
        <Card
          heading={component.heading}
          body={component.body}
          buttons={component.buttons}
          backgroundColor={component.backgroundColor}
          displayType={component.displayType}
        />
      );

    case "Plain Text":
      return (
        <PlainText
          heading={component.heading}
          body={component.body}
          buttons={component.buttons}
          backgroundColor={component.backgroundColor}
          displayType={component.displayType}
        />
      );

    default:
      break;
  }
};

const Column = ({ column }: Props) => {
  console.log(column.components);
  return (
    <div
      className="column"
      style={{ backgroundColor: column.backgroundColor }}
      id={column.slug}
    >
      {column.heading ? <h3 className="h3">{column.heading}</h3> : null}
      {column.components
        ? column.components.map((component) => {
            let field;
            if (component.type === "Field") {
              field = getField(component.parsedComponent as Field); //TODO fixa types
            } else if (component.type === "Contact") {
              console.log("found contact");
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
