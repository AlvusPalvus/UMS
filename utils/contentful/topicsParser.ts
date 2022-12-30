import { Card, Contact, ContactItem, Field, Gallery } from "../../types/Topics";
import { parseImage } from "./elementsParser";

export const parseField = (component) => {
    const type = component.sys.contentType.sys.id;
    let parsedComponent;
    if (type == "card") {
        parsedComponent = parseCard(component);
    } else parsedComponent = null; // Do this for all the differnet kinds of components

    return {
        parsedComponent,
    };
};

const parseCard = (card): Card => {
    let { heading, bodyText, buttons } = card.fields;
    if (buttons !== undefined) {
        buttons = buttons.map((button) => {
            const text = button.fields.buttonText;
            const link = button.fields.link;
            return { text, link };
        });
    } else buttons == null;

    if (heading == undefined) {
        heading = null;
    }
    return;
};

export const parseGallery = (gallery): Gallery => {
    const array = gallery.fields.images.map((image) => {
        return parseImage(image);
    });
    console.log(array[0]);
    return {
        heading: gallery.fields.heading,
        images: array,
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
    let email,
        phone,
        adress,
        facebook,
        instagram = null;
    if (contactFields.eMail !== undefined) {
        email = contactFields.eMail;
    }
    if (contactFields.phone !== undefined) {
        phone = contactFields.phone;
    }
    if (contactFields.adress !== undefined) {
        adress = contactFields.adress;
    }
    if (contactFields.facebook !== undefined) {
        facebook = contactFields.facebook;
    }
    if (contactFields.instagram !== undefined) {
        instagram = contactFields.instagram;
    }

    return {
        email,
        phone,
        adress,
        facebook,
        instagram,
    };
};
