import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
//import styles from "../styles/Home.module.css";
import { Field } from "../types/Topics";

//Style this component as a card
const Card = ({ heading, body, buttons, backgroundColor }: Field) => {
    // console.log(heading);
    //console.log(body);
    console.log(buttons);
    return (
        <div className="container padding-block-500">
            <h3 className="fs-secondary-heading">{heading}</h3>
            <div>{documentToReactComponents(body)}</div>
            <div>
                {buttons &&
                    buttons.map((button) => (
                        <Link href={button.link} className="button">
                            {button.text}
                        </Link>
                    ))}
            </div>
            <Link href={"/membership"} className="button">
                Press me!
            </Link>
        </div>
    );
};

export default Card;
