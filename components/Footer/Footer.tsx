import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/legacy/image";
import styles from "../../styles/Footer.module.css";
import ContactTable from "../ContactTable";
import { Footer } from "../../types/Pages";
import Gallery from "../Gallery";
import Background from "./Background";

function Footer({ sponsors, contact, logo, socials, backgroundImage }: Footer) {
    return (
        <footer
            style={{
                backgroundImage: "url(https:" + backgroundImage.url + ")",
                backgroundSize: "cover",
                backgroundPosition: "bottom right",
            }}
            className="h-full w-screen mt-12 p-12"
        >
            <div className="container max-w-[1240px]">
                <div className={"container p-4 m-8 bg-white/70"}>
                    <h2 className="fs-secondary-heading">{sponsors.heading}</h2>{" "}
                    <div className={"m-12 flex justify-around grow"}>
                        {sponsors.images.map((logo) => (
                            <Image
                                src={"https:" + logo.url}
                                width={logo.width}
                                height={logo.height}
                                alt={logo.filename}
                            ></Image>
                        ))}
                    </div>
                </div>

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
            </div>
            <div className={styles.image}></div>
        </footer>
    );
}

export default Footer;
