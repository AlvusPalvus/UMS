import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { isTemplateSpan } from "typescript";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

type Props = {
  logoSrc: string;
  footerImageSrc: string;
  sponsors: any;
  contact: any;
  socials: any;
};

const parseContactInfo = (contactItems) => {
  console.log(contactItems);
  const contactInfo = [
    {
      icon: <FiMail />,
      text: contactItems.at(0).fields.value,
    },
    {
      icon: <FiPhone />,
      text: contactItems.at(1).fields.value,
    },
    {
      icon: <FiMapPin />,
      text: contactItems.at(2).fields.value,
    },
  ];

  return contactInfo;
};

const parseSocialsInfo = (socialsItems) => {
  const socialsInfo = [
    {
      icon: <FiFacebook />,
      text: socialsItems.at(0).fields.value,
    },
    {
      icon: <FiInstagram />,
      text: socialsItems.at(1).fields.value,
    },
  ];

  return socialsInfo;
};

function Footer({
  logoSrc,
  footerImageSrc,
  sponsors,
  contact,
  socials,
}: Props) {
  const contactItems = parseContactInfo(contact.items);
  const socialsItems = parseSocialsInfo(socials.items);

  return (
    <footer
      style={{ backgroundImage: "url(https:" + footerImageSrc + ")" }}
      className={styles.footer}
    >
      <div className={styles.sponsors}>
        <h2>{sponsors.heading}</h2> <hr />
        <div className={styles.gallery}>
          {/*TODO:  Läs in med en for each/map!!!*/}
          <Image
            src={"https://" + logoSrc}
            width={140}
            height={130}
            alt={"Logga"}
          ></Image>
          <Image
            src={"https://" + logoSrc}
            width={140}
            height={130}
            alt={"Logga"}
          ></Image>
          <Image
            src={"https://" + logoSrc}
            width={140}
            height={130}
            alt={"Logga"}
          ></Image>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.gridColumn}>
          <h2>{contact.heading}</h2>

          <table>
            <tr>
              <th colSpan={2}>{contact.subHeading}</th>
            </tr>
            <tr>
              <td>{contactItems[0].icon}</td> <td>{contactItems[0].text}</td>
            </tr>
            <tr>
              <td>{contactItems[1].icon}</td> <td>{contactItems[1].text}</td>
            </tr>
            <tr>
              {" "}
              <td>{contactItems[2].icon}</td> <td>{contactItems[2].text}</td>
            </tr>
          </table>
        </div>
        <div className={styles.gridColumn}>
          <Image
            src={"https://" + logoSrc}
            width={140}
            height={130}
            alt={"Logga"}
          ></Image>
        </div>
        <div className={styles.gridColumn}>
          <h2>{socials.heading}</h2>
          <table>
            <tr>
              <td>{socialsItems[0].icon}</td> <td>{socialsItems[0].text}</td>
            </tr>
            <tr>
              <td>{socialsItems[1].icon}</td> <td>{socialsItems[1].text}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className={styles.image}></div>
    </footer>
  );
}

export default Footer;
