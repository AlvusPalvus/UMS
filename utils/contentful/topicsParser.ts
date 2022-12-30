import { Component } from "../../types/Assemblies";
import { Card, Contact, ContactItem, Field, Gallery } from "../../types/Topics";
import { parseImage } from "./elementsParser";

export const parseComponent = (component): Component => {
    const type = component.sys.contentType.sys.id;
    // console.log(type);
    let parsedComponent = null;
    let componentType;
    if (type == "card") {
        parsedComponent = parseField(component);
        componentType = "Field";
    } else if (type == "galleryComponent") {
        parsedComponent = parseGallery(component);
        componentType = "Gallery";
    } // Do this for all the differnet kinds of components

    return {
        type: componentType || null,
        parsedComponent: parsedComponent || null,
    };
};

const parseField = (field): Field => {
    let { heading, bodyText, buttons, backgroundColor, displayAs } =
        field.fields;
    if (buttons !== undefined) {
        buttons = buttons.map((button) => {
            const text = button.fields.buttonText;
            const link = button.fields.link;
            return { text, link };
        });
    } else buttons == null;

    // console.log(displayAs);
    return {
        displayType: displayAs,
        heading: heading || null,
        body: bodyText,
        buttons,
        backgroundColor: backgroundColor || null,
    };
};

export const parseGallery = (gallery): Gallery => {
    const images = gallery.fields.images.map((image) => {
        return parseImage(image);
    });
    return {
        heading: gallery.fields.heading || null,
        images,
    };
};

export const parseContact = (contact): Contact => {
    return {
        heading: contact.fields.heading || null,
        text: contact.fields.text || null,
        contactItem: parseContactItem(contact.fields),
    };
};

const parseContactItem = (contactFields): ContactItem => {
    const email = contactFields.eMail || null;
    const phone = contactFields.phone || null;
    const adress = contactFields.adress || null;

    const facebook = contactFields.facebook || null;
    const instagram = contactFields.instagram || null;

    return {
        email,
        phone,
        adress,
        facebook,
        instagram,
    };
};
