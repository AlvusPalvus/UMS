import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Field } from "../types/Topics";

const options = {
    renderNode: {
        paragraph: (node, children) => <p className="fs-body">{children}</p>,
        "heading-1": (node, children) => (
            <h1 className="fs-primary-heading">{children}</h1>
        ),
    },
};

const PlainText = ({ heading, body, buttons, backgroundColor }: Field) => {
    // console.log(heading);
    //console.log(buttons);
    return (
        <div className={styles.container}>
            <h3>{heading}</h3>
            <div>{documentToReactComponents(body, options)}</div>
            <div>
                {buttons &&
                    buttons.map((button) => (
                        <Link
                            href={button.link}
                            className="button"
                            key={button.link}
                        >
                            {button.text}
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default PlainText;
