import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";
import { ContactItem } from "../types/Topics";
import styles from "../styles/Components.module.css";
import reactMarkdown from "react-markdown";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type ContactRow = {
  icon: JSX.Element;
  text: string[];
  link?: string;
};

const renderContactInfo = (contactItem: ContactItem) => {
  let contactInfo: ContactRow[] = [];

  if (contactItem.email != null) {
    const text = [];
    text.push(contactItem.email);
    contactInfo.push({
      icon: <FiMail />,
      text: text,
    });
  }

  if (contactItem.phone != null) {
    const text = [];
    text.push(contactItem.phone);
    contactInfo.push({
      icon: <FiPhone />,
      text: text,
    });
  }

  if (contactItem.adress != null) {
    const adress = contactItem.adress;
    const adressArray = adress.split("\n");

    contactItem.adressLink != null
      ? contactInfo.push({
          icon: <FiMapPin />,
          text: adressArray,
          link: contactItem.adressLink,
        })
      : contactInfo.push({
          icon: <FiMapPin />,
          text: adressArray,
        });
  }

  if (contactItem.facebook != null) {
    const text = [];
    text.push(contactItem.facebook);

    contactItem.facebookLink != null
      ? contactInfo.push({
          icon: <FiFacebook />,
          text: text,
          link: contactItem.facebookLink,
        })
      : contactInfo.push({
          icon: <FiFacebook />,
          text: text,
        });
  }

  if (contactItem.instagram != null) {
    const text = [];
    text.push(contactItem.instagram);
    contactItem.instagramLink != null
      ? contactInfo.push({
          icon: <FiInstagram />,
          text: text,
          link: contactItem.instagramLink,
        })
      : contactInfo.push({
          icon: <FiInstagram />,
          text: text,
        });
  }

  return contactInfo;
};

const tableRow = (item: ContactRow) => {
  return item.link != undefined ? (
    <tr className="p-2 mb-3" key={item.text[0]}>
      <a className="text-neutral-900" href={item.link} target="_blank">
        <td style={{ verticalAlign: "baseline" }} className="p-2 ">
          {item.icon}
        </td>
      </a>
      <td style={{ verticalAlign: "baseline" }} className="p-2 ">
        {item.text.map((textRow, i) => {
          return <p className="">{textRow}</p>;
        })}
      </td>
    </tr>
  ) : (
    <tr className="p-2" key={item.text[0]}>
      <td style={{ verticalAlign: "baseline" }} className="p-2 ">
        {item.icon}
      </td>
      <td style={{ verticalAlign: "baseline" }} className="p-2 ">
        {item.text.map((textRow, i) => {
          return <p className="">{textRow}</p>;
        })}
      </td>
    </tr>
  );
};

type Props = {
  contactInfo: ContactItem;
};

const ContactTable = ({ contactInfo }: Props) => {
  let contactItems = renderContactInfo(contactInfo) as ContactRow[];
  return (
    <div className={"p-1"}>
      <table>
        <tbody>{contactItems.map((item) => tableRow(item))}</tbody>
      </table>
    </div>
  );
};

export default ContactTable;
