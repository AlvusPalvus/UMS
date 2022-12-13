import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, Block } from "@contentful/rich-text-types";
import Link from "next/link";

type Props = {
  heading: string;
  body: Document;
  buttons: [
    {
      text: string;
      link: string;
    }
  ];
};

const Card = ({ heading, body, buttons }: Props) => {
  console.log(heading);
  console.log(body);
  console.log(buttons);
  return (
    <div>
      <h3>{heading}</h3>
      <div>{documentToReactComponents(body)}</div>
      <div>
        {buttons.map((button) => (
          <Link href={button.link}>{button.text}</Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
