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
    if (component.slug === "embed-map") {
        return (
            <div className="container self-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.5390984631736!2d20.2963778!3d63.815828399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5afe324f399f%3A0x7d9e34bc5973b1f9!2sK%C3%A5rhuset%20Villan!5e0!3m2!1sen!2sse!4v1683545043124!5m2!1sen!2sse"
                    width="100%"
                    height="450"
                    className="border:0;"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        );
    }
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
    let styling = "flex gap-4 flex-col space-evenly ";
    if (column.displayType === "Accordion") {
        styling = "flex gap-4 flex-col py-12 bg-lightBlue";
    }
    if (column.displayType === "Card") {
        styling = "card px-8 pb-8 pt-4 flex gap-4 flex-col card bg-white";
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
                            element = getField(
                                component.parsedComponent as FieldType
                            );
                            break;
                        case "Column":
                            element = (
                                <Column
                                    column={
                                        component.parsedComponent as ColumnType
                                    }
                                />
                            );

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
