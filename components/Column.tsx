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
                    key={Math.random()}
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
                    key={Math.random()}
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
                    key={Math.random()}
                />
            );

        default:
            break;
    }
};

const Column = ({ heading, components, backgroundColor }: ColumnType) => {
    return (
        <div className="container" style={{ backgroundColor: backgroundColor }}>
            {heading ? <h3 className="h3">{heading}</h3> : null}
            {components
                ? components.map((component) => {
                      let field;
                      if (component.type === "Field") {
                          field = getField(component.parsedComponent as Field); //TODO fixa types
                      }
                      return field || null;
                  })
                : null}
        </div>
    );
};

export default Column;
