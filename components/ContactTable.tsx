import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiFacebook,
    FiInstagram,
} from "react-icons/fi";
import { ContactItem } from "../types/Topics";
import styles from "../styles/Components.module.css";

const renderContactInfo = (contactItem: ContactItem) => {
    let contactInfo: ContactRow[] = [];
    console.log(contactItem);

    if (contactItem.email) {
        contactInfo.push({
            icon: <FiMail />,
            text: contactItem.email,
        });
    }

    if (contactItem.phone) {
        contactInfo.push({
            icon: <FiPhone />,
            text: contactItem.phone,
        });
    }

    if (contactItem.adress) {
        contactInfo.push({
            icon: <FiMapPin />,
            text: contactItem.adress,
        });
    }

    if (contactItem.facebook) {
        contactInfo.push({
            icon: <FiFacebook />,
            text: contactItem.facebook,
        });
    }

    if (contactItem.instagram) {
        contactInfo.push({
            icon: <FiInstagram />,
            text: contactItem.instagram,
        });
    }

    return contactInfo;
};

const tableRow = (item: ContactRow) => {
    return (
        <tr>
            <td>{item.icon}</td> <td>{item.text}</td>
        </tr>
    );
};

type ContactRow = {
    icon: JSX.Element;
    text: string;
};

type Props = {
    contactInfo: ContactItem;
};

const ContactTable = ({ contactInfo }: Props) => {
    console.log(contactInfo);
    let contactItems = renderContactInfo(contactInfo) as ContactRow[];
    return (
        <div className={styles.gridColumn}>
            <table>
                <tbody>{contactItems.map((item) => tableRow(item))}</tbody>
            </table>
        </div>
    );
};

export default ContactTable;