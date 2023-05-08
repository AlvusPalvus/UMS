import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiFacebook,
    FiInstagram,
} from "react-icons/fi";
import { ContactItem, Contact } from "../types/Topics";

type ContactRow = {
    icon: JSX.Element;
    text: string[];
    link?: string;
};

const renderContactInfo = (contactItem: ContactItem) => {
    let contactInfo: ContactRow[] = [];

    contactItem.email &&
        contactInfo.push({
            icon: <FiMail />,
            text: [contactItem.email],
            link: "mailto:" + contactItem.email,
        });

    contactItem.phone &&
        contactInfo.push({
            icon: <FiPhone />,
            text: [contactItem.phone],
        });

    if (contactItem.adress) {
        const adressArray = contactItem.adress.split("\n");
        contactInfo.push({
            icon: <FiMapPin />,
            text: adressArray,
            link: contactItem.adressLink ?? null,
        });
    }

    contactItem.facebook &&
        contactInfo.push({
            icon: <FiFacebook />,
            text: [contactItem.facebook],
            link: contactItem.facebookLink ?? null,
        });

    contactItem.instagram &&
        contactInfo.push({
            icon: <FiInstagram />,
            text: [contactItem.instagram],
            link: contactItem.instagramLink ?? null,
        });

    return contactInfo;
};

const tableRow = (item: ContactRow, i: number) => {
    return item.link != undefined ? (
        <div className="grid grid-cols-7 gap-2 p-3" key={i}>
            <div className="col-span-1">
                <a className="fs-iconsFooter" href={item.link} target="_blank">
                    {item.icon}
                </a>
            </div>
            <div className="col-span-6">
                {item.text.map((textRow, i) => {
                    return <p key={i}>{textRow}</p>;
                })}
            </div>
        </div>
    ) : (
        <div className="grid grid-cols-7 gap-2 p-3" key={i}>
            <div className="col-span-1 fs-iconsFooter">{item.icon}</div>
            <div className="col-span-6">
                {item.text.map((textRow, i) => {
                    return <p key={i}>{textRow}</p>;
                })}
            </div>
        </div>
    );
};

type Props = {
    contactInfo: ContactItem;
};

const ContactTable = ({ contactInfo: contactItems }: Props) => {
    let contactRow = renderContactInfo(contactItems) as ContactRow[];
    return (
        <div className={"flex flex-col align-baseline justify-between "}>
            {contactRow.map((item, i) => {
                return tableRow(item, i);
            })}
        </div>
    );
};

export default ContactTable;
