import React from "react";
import {
    Field as FieldType,
    Person as PersonType,
    Gallery as GalleryType,
    Contact as ContactType,
    ImageComponent as ImageComponentType,
} from "../types/Topics";
import { Column as ColumnType } from "../types/Assemblies";

import { Card, PlainText, AccordionField } from "./Field";
import Gallery from "./Gallery";
import Person from "./Person";
import Contact from "./Contact";
import ImageComponent from "./ImageComponent";

type Props = {
    column: ColumnType;
};

const getField = (component: FieldType) => {
    switch (component.displayType) {
        case "Accordion":
            return (
                <AccordionField key={component.slug} component={component} />
            );
        case "Card":
            return <Card key={component.slug} component={component} />;
        case "Plain Text":
            return <PlainText key={component.slug} component={component} />;

        default:
            console.error("error in field");
            break;
    }
};

const Column = ({ column }: Props) => {
    let styling = "flex gap-4 flex-col ";
    if (column.displayType === "Accordion") {
        styling = "flex gap-4 flex-col ";
    }
    if (column.displayType === "Card") {
        styling = "flex gap-4 flex-col card";
    }

    return (
        <div
            className={styling}
            style={{ backgroundColor: column.backgroundColor }}
            id={column.slug}
        >
            {column.components &&
                column.components.map((component, i) => {
                    let element = <></>;

                    let field = component.type;

                    switch (field) {
                        case "Field":
                            column.displayType === "Plain Text"
                                ? (element = getField(
                                      component.parsedComponent as FieldType
                                  ))
                                : (element = (
                                      <PlainText
                                          key={i}
                                          component={
                                              component.parsedComponent as FieldType
                                          }
                                      />
                                  ));
                            break;

                        case "Person":
                            element = (
                                <Person
                                    key={i}
                                    person={
                                        component.parsedComponent as PersonType
                                    }
                                />
                            );
                            break;
                        case "Gallery":
                            element = (
                                <Gallery
                                    key={i}
                                    gallery={
                                        component.parsedComponent as GalleryType
                                    }
                                />
                            );
                            break;
                        case "Contact": {
                            element = (
                                <Contact
                                    key={i}
                                    contact={
                                        component.parsedComponent as ContactType
                                    }
                                />
                            );
                            break;
                        }
                        case "Image": {
                            element = (
                                <ImageComponent
                                    key={i}
                                    imageComponent={
                                        component.parsedComponent as ImageComponentType
                                    }
                                />
                            );
                        }
                        default:
                            break;
                    }

                    return element;
                })}
        </div>
    );
};

export default Column;
