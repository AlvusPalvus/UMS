import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "./Layout";
import styles from "../styles/Header.module.css";
import { isTemplateSpan } from "typescript";

type Props = {};

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

function Header({}: Props) {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Image
          src="/UMS_logo_white.png"
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
    </header>
  );
}

export default Header;
