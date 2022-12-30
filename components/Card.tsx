import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Card } from "../types/Topics";

const Card = ({ heading, body, buttons, backgroundColor }: Card) => {
    // console.log(heading);
    //console.log(body);
    //console.log(buttons);
    return (
        <div className={styles.container}>
            <h3>{heading}</h3>
            <div>{documentToReactComponents(body)}</div>
            <div>
                {buttons &&
                    buttons.map((button) => (
                        <Link href={button.link}>{button.text}</Link>
                    ))}
            </div>
        </div>
    );
};

export default Card;
