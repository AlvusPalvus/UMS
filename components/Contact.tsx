import React from "react";
import { Contact as ContactType } from "../types/Topics";
import ContactTable from "./ContactTable";

type Props = {
  contact: ContactType;
};

const Contact = ({ contact }: Props) => {
  return (
    <div>
      {contact.heading && <h3> {contact.heading}</h3>}
      {contact.text && <h3> {contact.text}</h3>}
      <ContactTable contactInfo={contact.contactItems} />
    </div>
  );
};

export default Contact;
