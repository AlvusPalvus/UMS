import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Field } from "../types/Topics";

/** Styling for rich text rendering */

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="fs-body">{children}</p>
        ),
        [BLOCKS.HEADING_1]: (node, children) => (
            // <h1 className="fs-primary-heading">{children}</h1>
            <h3 className="h3">{children}</h3>
        ),
        [BLOCKS.HEADING_2]: (node, children) => (
            // <h2 className="fs-primary-heading">{children}</h2>
            <h4 className="h4">{children}</h4>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
            <h3 className="h3">{children}</h3>
        ),
        [BLOCKS.HEADING_4]: (node, children) => (
            <h4 className="h4">{children}</h4>
        ),
    },
};

type Props = {
    component: Field;
};

const getContent = (component) => {
    return (
        <>
            {component.heading && <h3 className="h3">{component.heading}</h3>}
            <div className=" link">
                {documentToReactComponents(component.body, options)}
            </div>

            {component.buttons && (
                <div>
                    {component.buttons.map((button, i) => (
                        <Link
                            href={button.link}
                            className="button"
                            target="_blank"
                            key={i}
                        >
                            {button.text}
                        </Link>
                    ))}
                </div>
            )}
            {component.assets && (
                <div>
                    {component.assets.map((doc) => (
                        <p>{doc}</p>
                    ))}
                </div>
            )}
        </>
    );
};

export const PlainText = ({ component }: Props) => {
    return (
        <div className={"field p-2"} id={component.slug}>
            {getContent(component)}
        </div>
    );
};

export const Accordion = ({ component }: Props) => {
    return (
        <div className={"field accordion"} id={component.slug}>
            {getContent(component)}
        </div>
    );
};

export const Card = ({ component }: Props) => {
    return (
        <div className={"field card px-8 pb-8 pt-4"} id={component.slug}>
            {getContent(component)}
        </div>
    );
};
