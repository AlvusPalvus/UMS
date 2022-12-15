import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/legacy/image";
import { GetServerSideProps } from "next";
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
  sponsors: { heading: string; sponsorLogos: any };
  contact: any;
  socials: any;
};

const parseContactInfo = (contactItems) => {
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

const tableRow = (item: any) => {
  return (
    <tr>
      <td>{item.icon}</td> <td>{item.text}</td>
    </tr>
  );
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
          {sponsors.sponsorLogos.map((logo) => (
            <Image
              src={"https:" + logo.url}
              width={logo.details.image.width}
              height={logo.details.image.height}
              alt={logo.filename}
            ></Image>
          ))}
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.gridColumn}>
          <h2>{contact.heading}</h2>
          <table>
            <tbody>
              <tr>
                <th colSpan={2}>{contact.subHeading}</th>
              </tr>
              {contactItems.map((item) => tableRow(item))}
            </tbody>
          </table>
        </div>
        <div className={styles.gridColumn}>
          <Image
            src={"https:" + logoSrc}
            width={140}
            height={130}
            alt={"Logga"}
          ></Image>
          <p>Copyright 2022</p>
        </div>
        <div className={styles.gridColumn}>
          <h2>{socials.heading}</h2>
          <table>
            <tbody>{socialsItems.map((item) => tableRow(item))}</tbody>
          </table>
        </div>
      </div>
      <div className={styles.image}></div>
    </footer>
  );
}

/*
<table>
            <tr>
              <th colSpan={2}>{contact.subHeading}</th>
            </tr>
            {contactItems.map((item) => tableRow(item))}
          </table>
<table>{socialsItems.map((item) => tableRow(item))}</table>*/

export default Footer;
