import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
//import styles from "../styles/Home.module.css";
import { Field } from "../types/Topics";

type Props = {
  card: Field;
};

//Style this component as a card
const Card = ({ card }: Props) => {
  return (
    <div className="card">
      <h3 className="h3">{card.heading}</h3>
      <div className="link">{documentToReactComponents(card.body)}</div>
      <div>
        {card.buttons &&
          card.buttons.map((button) => (
            <Link href={button.link} className="button">
              {button.text}
            </Link>
          ))}
      </div>
      <div>{card.assets && card.assets.map((doc) => <p>{doc}</p>)}</div>
    </div>
  );
};

export default Card;
