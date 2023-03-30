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

const tableRow = (item: ContactRow, i: number) => {
  return item.link != undefined ? (
    <div key={i} className="grid grid-cols-7 gap-2 p-3">
      <div className="col-span-1">
        <a
          className="text-neutral-900 fs-iconsFooter"
          href={item.link}
          target="_blank"
        >
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
    <div key={i} className="grid grid-cols-7 gap-2 p-3">
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

const ContactTable = ({ contactInfo }: Props) => {
  let contactItems = renderContactInfo(contactInfo) as ContactRow[];
  return (
    <div className={"flex flex-col align-baseline justify-between"}>
      {contactItems.map((item, i) => tableRow(item, i))}
    </div>
  );
};

export default ContactTable;
