import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Field } from "../types/Topics";
import { FiExternalLink, FiDatabase, FiFileText } from "react-icons/fi";
import { useState } from "react";
import Accordion from "./Accordion";

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
            <div className=" link">
                {documentToReactComponents(component.body, options)}
            </div>

            {component.buttons && (
                <div>
                    {component.buttons.map((button, i) => {
                        switch (button.linkType) {
                            case "External link":
                                return (
                                    <Link
                                        href={button.link}
                                        className="button flex flex-row gap-4"
                                        target="_blank"
                                        key={i}
                                    >
                                        {button.text}
                                        <FiExternalLink className="text-xl" />
                                    </Link>
                                );

                            case "Form":
                                return (
                                    <Link
                                        href={button.link}
                                        className="button flex flex-row gap-4"
                                        target="_blank"
                                        key={i}
                                    >
                                        {button.text}
                                        <FiFileText className="text-xl" />
                                    </Link>
                                );

                            default:
                                return (
                                    <Link
                                        href={button.link}
                                        className="button"
                                        key={i}
                                    >
                                        {button.text}
                                    </Link>
                                );
                        }
                    })}
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
            {component.heading && <h3 className="h3">{component.heading}</h3>}
            {getContent(component)}
        </div>
    );
};

export const AccordionField = ({ component }: Props) => {
    return (
        <Accordion
            heading={
                component.heading ? (component.heading as string) : "No heading"
            }
            content={getContent(component)}
            id={component.slug}
        />
    );
};

export const Card = ({ component }: Props) => {
    return (
        <div className={"field card px-8 pb-8 pt-4"} id={component.slug}>
            {component.heading && <h3 className="h3">{component.heading}</h3>}
            {getContent(component)}
        </div>
    );
};
