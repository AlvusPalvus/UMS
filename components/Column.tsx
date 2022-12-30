import React from "react";
import { Field } from "../types/Topics";
import { Column as ColumnType } from "../types/Assemblies";

import Card from "./Card";
import PlainText from "./PlainText";
import Accordion from "./Accordion";

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

const Column = ({ heading, components, backgroundColor }: ColumnType) => {
    console.log(components);
    return (
        <div>
            {heading ? <h3>{heading}</h3> : null}
            {components.map((component) => {
                console.log(component);
                if (component.type === "Field") {
                    return getField(component.parsedComponent as Field); //TODO fixa types
                }
            })}
        </div>
    );
};

export default Column;
