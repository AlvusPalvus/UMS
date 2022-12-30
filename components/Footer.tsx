import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/legacy/image";
import styles from "../styles/Footer.module.css";
import ContactTable from "./ContactTable";
import { Footer } from "../types/Pages";
import Gallery from "./Gallery";

function Footer({ sponsors, contact, logo, socials, backgroundImage }: Footer) {
    return (
        <footer
            style={{
                backgroundImage: "url(https:" + backgroundImage.url + ")",
            }}
            className={styles.footer}
        >
            <div className={styles.sponsors}>
                <Gallery heading={sponsors.heading} images={sponsors.images} />
            </div>
            <hr></hr>
            <div className={styles.bottomSection}>
                <div className={styles.gridColumn}>
                    <h2>{contact.heading}</h2>
                    <ContactTable contactInfo={contact.contactItem} />
                </div>
                <div className={styles.gridColumn}>
                    <Image
                        src={"https:" + logo.url}
                        width={140}
                        height={130}
                        alt={"Logga"}
                    ></Image>
                    <p>Copyright 2022</p>
                </div>
                <div className={styles.gridColumn}>
                    <h2>{socials.heading}</h2>
                    <ContactTable contactInfo={socials.contactItem} />
                </div>
            </div>
            <div className={styles.image}></div>
        </footer>
    );
}

export default Footer;
