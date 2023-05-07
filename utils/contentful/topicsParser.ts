import { Component } from "../../types/Assemblies";
import { CfImage, CfLink } from "../../types/Elements";
import {
    Contact,
    ContactItem,
    Field,
    Gallery,
    ImageComponent,
    Person,
} from "../../types/Topics";
import { parseCfImage } from "./elementsParser";

export const parseComponent = (component): Component => {
    const type = component.sys.contentType.sys.id;
    let parsedComponent = null;
    let componentType;
    if (type == "card") {
        parsedComponent = parseField(component);
        componentType = "Field";
    } else if (type == "galleryComponent") {
        parsedComponent = parseGallery(component);
        componentType = "Gallery";
    } else if (type == "contactInformation") {
        parsedComponent = parseContact(component);
        componentType = "Contact";
    } else if (type == "person") {
        parsedComponent = parsePerson(component);
        componentType = "Person";
    } else if (type == "image") {
        parsedComponent = parseImageComponent(component);
        componentType = "Image";
    } else {
        console.error(type);
    }

    return {
        type: componentType || null,
        parsedComponent: parsedComponent || null,
    };
};

const parseField = (field): Field => {
    let {
        heading,
        slug,
        bodyText,
        buttons,
        assets,
        backgroundColor,
        displayAs,
    } = field.fields;

    if (buttons !== undefined) {
        buttons = buttons.map((button): CfLink => {
            if (button.fields === undefined) {
                console.log(bodyText);
            }
            let { buttonText, link, linkType } = button.fields;

            linkType = linkType === undefined ? "Internal" : linkType;
            return { text: buttonText, link, linkType };
        });
    } else buttons = null;

    return {
        displayType: displayAs,
        slug: slug,
        heading: heading || null,
        body: bodyText || null,
        buttons,
        assets: assets || null,
        backgroundColor: backgroundColor || null,
    };
};

export const parseGallery = (gallery): Gallery => {
    const images = gallery.fields.images.map((image) => {
        return parseCfImage(image);
    });
    return {
        heading: gallery.fields.heading || null,
        images,
    };
};

export const parseImageComponent = (imageComponent): ImageComponent => {
    const { image, displaySetting } = imageComponent.fields;

    if (image === undefined) {
        console.error("image required error", imageComponent);
    }

    return {
        image: parseCfImage(image),
        displaySettings: displaySetting,
    };
};

export const parsePerson = (person): Person => {
    return {
        name: person.fields.name || null,
        role: person.fields.role || null,
        profileImage: person.fields.profilePicture
            ? parseCfImage(person.fields.profilePicture)
            : null,
        contact: person.fields.contact
            ? parseContact(person.fields.contact)
            : null,
    };
};

export const parseContact = (contact): Contact => {
    return {
        heading: contact.fields.heading || null,
        text: contact.fields.text || null,
        contactItems: parseContactItems(contact.fields),
    };
};

const parseContactItems = (contactFields): ContactItem => {
    const email = contactFields.eMail || null;
    const phone = contactFields.phone || null;
    const adress = contactFields.adress || null;

    const facebook = contactFields.facebook || null;
    const instagram = contactFields.instagram || null;
    const adressLink = contactFields.adressLink || null;

    const facebookLink = contactFields.facebookLink || null;
    const instagramLink = contactFields.instagramLink || null;

    return {
        email,
        phone,
        adress,
        facebook,
        instagram,
        adressLink,
        facebookLink,
        instagramLink,
    };
};
