import React, { ReactElement, useState } from "react";

type Props = {
    heading: string;
    content: ReactElement;
    id: string;
};

const Accordion = ({ heading, content, id }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="bg-white mx-12 rounded-xl " id={id}>
            <div
                className="flex justify-between items-center py-2 px-6 cursor-pointer select-none"
                onClick={toggleAccordion}
            >
                {heading && <h3 className="h3">{heading}</h3>}
                <svg
                    className={`h-6 w-6 transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
            {isOpen && <div className="px-6 pb-4">{content}</div>}
        </div>
    );
};

export default Accordion;
