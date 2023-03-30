import React from "react";
import { Person } from "../types/Topics";
import ContactTable from "./ContactTable";

type Props = {
  person: Person;
};

const Person = ({ person }: Props) => {
  return (
    <div>
      <h1>{person.name}</h1>
      {person.contact && (
        <ContactTable contactInfo={person.contact.contactItem} />
      )}
    </div>
  );
};

export default Person;
