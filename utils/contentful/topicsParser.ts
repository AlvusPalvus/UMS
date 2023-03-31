import { Component } from "../../types/Assemblies";
import {
  Contact,
  ContactItem,
  Field,
  Gallery,
  Person,
} from "../../types/Topics";
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
  } else if (type == "contactInformation") {
    parsedComponent = parseContact(component);
    componentType = "Contact";
  } else if (type == "person") {
    parsedComponent = parsePerson(component);
    componentType = "Person";
  } else {
    console.log(type);
  }

  return {
    type: componentType || null,
    parsedComponent: parsedComponent || null,
  };
};

const parseField = (field): Field => {
  let { heading, slug, bodyText, buttons, assets, backgroundColor, displayAs } =
    field.fields;
  if (buttons !== undefined) {
    buttons = buttons.map((button) => {
      const text = button.fields.buttonText;
      const link = button.fields.link;
      return { text, link };
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
    return parseImage(image);
  });
  return {
    heading: gallery.fields.heading || null,
    images,
  };
};

export const parsePerson = (person): Person => {
  return {
    name: person.fields.name || null,
    role: person.fields.role || null,
    profileImage: person.fields.image ? parseImage(person.fields.image) : null,
    contact: person.fields.contact ? parseContact(person.fields.contact) : null,
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
