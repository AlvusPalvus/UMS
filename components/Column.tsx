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
      return <Accordion component={component} />;
    case "Card":
      return <Card component={component} />;
    case "Plain Text":
      return <PlainText component={component} />;

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
        column.components.map((component) => {
          let element = <></>;

          let field = component.type;

          switch (field) {
            case "Field":
              element = getField(component.parsedComponent as FieldType);

              break;
            case "Person":
              element = (
                <Person person={component.parsedComponent as PersonType} />
              );
              break;
            case "Gallery":
              element = (
                <Gallery gallery={component.parsedComponent as GalleryType} />
              );
              break;
            case "Contact":
              element = (
                <ContactTable
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
