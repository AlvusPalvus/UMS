import React from "react";
import {
  Field as FieldType,
  Person as PersonType,
  Gallery as GalleryType,
  Contact as ContactType,
} from "../types/Topics";
import { Column as ColumnType } from "../types/Assemblies";

import { Card, PlainText, Accordion } from "./Field";
import Gallery from "./Gallery";
import Person from "./Person";
import Contact from "./Contact";

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
      className="flex gap-4 flex-col "
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
                <Person
                  key={i}
                  person={component.parsedComponent as PersonType}
                />
              );
              break;
            case "Gallery":
              element = (
                <Gallery
                  key={i}
                  gallery={component.parsedComponent as GalleryType}
                />
              );
              break;
            case "Contact": {
              element = (
                <Contact
                  key={i}
                  contact={component.parsedComponent as ContactType}
                />
              );
              break;
            }
          }
          return element;
        })}
    </div>
  );
};

export default Column;
