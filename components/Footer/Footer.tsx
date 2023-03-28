import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/legacy/image";
import styles from "../../styles/Footer.module.css";
import ContactTable from "../ContactTable";
import { Footer } from "../../types/Pages";

function Footer({ sponsors, contact, logo, socials, backgroundImage }: Footer) {
  return (
    <footer
      style={{
        backgroundImage: "url(https:" + backgroundImage.url + ")",
        backgroundSize: "cover",
        backgroundPosition: "bottom right",
      }}
      className=" "
    >
      <div className="container space-y-12 bg-white/70">
        <div className={"flex flex-col "}>
          <h2 className="fs-secondary-heading">{sponsors.heading}</h2>{" "}
          <div className={"flex justify-around grow"}>
            {sponsors.images.map((logo) => (
              <Image
                src={"https:" + logo.url}
                width={logo.width}
                height={logo.height}
                alt={logo.filename}
                key={logo.url}
              ></Image>
            ))}
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div style={{ order: 1 }} className={styles.contactChild}>
            <h2>{contact.heading}</h2>
            <ContactTable contactInfo={contact.contactItem} />
          </div>
          <div className={styles.logoChild}>
            <Image
              src={"https:" + logo.url}
              width={140}
              height={130}
              alt={"Logga"}
            ></Image>
            <p>Copyright 2022</p>
          </div>
          <div className={styles.socialsChild}>
            <h2>{socials.heading}</h2>
            <ContactTable contactInfo={socials.contactItem} />
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </footer>
  );
}

export default Footer;
