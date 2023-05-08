import React from "react";
import { Person } from "../types/Topics";
import ContactTable from "./ContactTable";
import Gallery from "./Gallery";
import Image from "next/image";

type Props = {
    person: Person;
};

const Person = ({ person }: Props) => {
    console.log(person.contact);
    return (
        <div
            className={
                "grid grid-cols-3 sm:flex-row items-center sm:items-start p-4 border-l-8 border-darkBlue"
            }
        >
            {person.profileImage ? (
                <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden ">
                    <Image
                        className="object-cover "
                        src={"https:" + person.profileImage.url}
                        fill
                        alt={person.profileImage.filename}
                    />
                </div>
            ) : (
                <div className="w-35 h-35 sm:w-16 sm:h-16 flex-shrink-0 rounded-full overflow-hidden bg-lightGreen"></div>
            )}
            <div className="col-span-2 ml-0 sm:ml-4 text-customBlack">
                <h3 className="text-lg font-medium text-gray-900 mb-1 sm:mb-0">
                    {person.name}
                </h3>
                {person.role && (
                    <p className="italic text-gray-600">{person.role}</p>
                )}
            </div>

            <div className="col-span-2 mt-1 text-sm text-gray-500">
                {person.contact && (
                    <ContactTable contactInfo={person.contact.contactItems} />
                )}
            </div>
        </div>
    );
};

export default Person;
