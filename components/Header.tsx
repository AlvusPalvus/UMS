import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import Layout from "./Layout";
import styles from "../styles/Header.module.css";
import { isTemplateSpan } from "typescript";

type Props = {
  headerContent: any;
  heroSrc: string;
  heroContent: ReactElement;
};

type NavLink = {
  title: string;
  link: string;
};

type MenuItem = {
  children?: NavLink[];
} & NavLink;

const links: MenuItem[] = [
  {
    link: "/membership",
    title: "Medlemskap", // TODO: läs in från contentful
    children: [{ link: "/#becomeMember", title: "Bli Medlem" }],
  },
  {
    link: "/educationalmatters",
    title: "Utbildningsfrågor",
    children: [
      {
        link: "/studentcase",
        title: "Anmäl studentfall",
      },
    ],
  },
  {
    link: "/studentlife",
    title: "Studentliv",
    children: [
      {
        link: "/events",
        title: "Evenemang",
      },
    ],
  },
  {
    link: "/villan",
    title: "Kårhuset Villan",
    children: [
      {
        link: "/#bookings",
        title: "Kontakt och bokningar",
      },
    ],
  },
  {
    link: "/about",
    title: "Om kåren",
  },
  {
    link: "/contact",
    title: "Kontakt",
  },
];

function Header({ headerContent, heroSrc, heroContent }: Props) {
  const logo_src = headerContent.logo.fields.file.url;

  return (
    <header
      style={{ backgroundImage: "url(https:" + heroSrc + ")" }}
      className={styles.header}
    >
      {/* <Image
        className="w-full -z-10"
        src={"https:" + heroSrc}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="hero image example"
      ></Image> */}
      <div className={styles.navbar}>
        <Link href={"/"}>
          <Image
            src={"https://" + logo_src}
            width={140}
            height={130}
            alt={"Logga"}
          ></Image>
        </Link>
        <nav className={styles.nav}>
          <ul>
            {links.map((link) => (
              <li>
                <Link href={link.link}> {link.title} </Link>
                {/* TODO: Hur dropdown? Children*/}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {heroContent}
    </header>
  );

  //   <header className={styles.heroWrapper}>
  //     <div className={styles.imageWrapper}>
  //       {/* <div className="relative"> */}
  //       <Image
  //         src={"https:" + heroSrc}
  //         layout="fill"
  //         objectFit="cover"
  //         objectPosition="center"
  //         //width={1000}
  //         // height={1000}
  //         alt="hero image example"
  //       ></Image>
  //     </div>

  //     <div className={styles.navbar}>
  //       <Link href={"/"}>
  //         <Image
  //           src={"https://" + logo_src}
  //           width={140}
  //           height={130}
  //           alt={"Logga"}
  //         ></Image>
  //       </Link>
  //       <nav className={styles.nav}>
  //         <ul>
  //           {links.map((link) => (
  //             <li>
  //               <Link href={link.link}> {link.title} </Link>
  //               {/* TODO: Hur dropdown? Children*/}
  //             </li>
  //           ))}
  //         </ul>
  //       </nav>
  //     </div>
  //     <div className={styles.heroContent}>{heroContent}</div>
  //   </header>
  // );
}

export default Header;
