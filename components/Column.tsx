import { ReactElement } from "react";
import { Card as CardType, Column } from "../types/Card";
import Card from "./Card";

const getCard = (component: CardType) => {
  return (
    <Card
      heading={component.heading}
      body={component.body}
      buttons={component.buttons}
      backgroundColor={component.backgroundColor}
    />
  );
};

const Column = ({ heading, components, backgroundColor }: Column) => {
  return (
    <div>
      {components.map((component) => {
        if (component.type == "card") {
          return getCard(component.parsedComponent as CardType); //TODO fixa types
        }
      })}
    </div>
  );
};

export default Column;
