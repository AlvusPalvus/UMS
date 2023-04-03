import React from "react";
import { Person } from "../types/Topics";
import ContactTable from "./ContactTable";
import Gallery from "./Gallery";
import Image from "next/image";

type Props = {
    person: Person;
};

const Person = ({ person }: Props) => {
    return (
        <div className={"flex "}>
            {person.profileImage ? (
                <Image
                    src={"https://" + person.profileImage.url}
                    width={45}
                    height={45}
                    alt={person.profileImage.filename}
                />
            ) : (
                <div></div>
            )}
            <h1>{person.name}</h1>
            {person.contact && (
                <ContactTable contactInfo={person.contact.contactItems} />
            )}
        </div>
    );
};

export default Person;
