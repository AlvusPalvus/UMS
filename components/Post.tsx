import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Field } from "../types/Topics";

const Post = ({ heading, body, buttons }: Field) => {
    return (
        <div className={styles.container}>
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

export default Post;
