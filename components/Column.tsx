import React from "react";
import {
  ContactItem,
  Field as FieldType,
  Person as PersonType,
  Gallery as GalleryType,
} from "../types/Topics";
import { Column as ColumnType } from "../types/Assemblies";

import { Card, PlainText, Accordion } from "./Field";
import ContactTable from "./ContactTable";
import Gallery from "./Gallery";
import Person from "./Person";

type Props = {
  column: ColumnType;
};

const getField = (component: FieldType) => {
  switch (component.displayType) {
    case "Accordion":
      return <Accordion key={component.slug} component={component} />;
    case "Card":
      return <Card key={component.slug} component={component} />;
    case "Plain Text":
      return <PlainText key={component.slug} component={component} />;

    default:
      console.log("error in field");
      break;
  }
};

const Column = ({ column }: Props) => {
  return (
    <div
      className=" "
      style={{ backgroundColor: column.backgroundColor }}
      id={column.slug}
    >
      {column.components &&
        column.components.map((component, i) => {
          let element = <></>;

          let field = component.type;

          switch (field) {
            case "Field":
              element = getField(component.parsedComponent as FieldType);

              break;
            case "Person":
              element = (
                <Person key={i} person={component.parsedComponent as PersonType} />
              );
              break;
            case "Gallery":
              element = (
                <Gallery key={i} gallery={component.parsedComponent as GalleryType} />
              );
              break;
            case "Contact":
              element = (
                <ContactTable key={i}
                  contactInfo={component.parsedComponent as ContactItem}
                />
              );
              break;

            default:
              console.log("error in column");
              break;
          }
          return element;
        })}
    </div>
  );
};

export default Column;
