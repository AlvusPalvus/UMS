import { ReactElement } from "react";
import Card from "./Card";
import { Document } from "@contentful/rich-text-types";

type Component = {
  type: string;
  parsedComponent: CardComponent | any; // Cards, posts, gallery, contact
};

type CardComponent = {
  heading: string;
  body: Document;
  buttons: [
    {
      text: string;
      link: string;
    }
  ];
  backgroundColor: string;
};

type Post = {
  heading: string;
  body: Document;
  buttons: [
    {
      text: string;
      link: string;
    }
  ];
};

type Props = {
  heading: string;
  components: [Component];
  backgroundColor: string;
};

const getCard = (component: CardComponent) => {
  return (
    <Card
      heading={component.heading}
      body={component.body}
      buttons={component.buttons}
      backgroundColor={component.backgroundColor}
    />
  );
};

const Column = ({ components }: Props) => {
  return (
    <div>
      {components.map((component) => {
        if (component.type == "card") {
          console.log(component);
          return getCard(component.parsedComponent as CardComponent); //TODO fixa types
        }
      })}
    </div>
  );
};

export default Column;
