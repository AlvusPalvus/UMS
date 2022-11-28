import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "./Layout";
import styles from "../styles/Header.module.css";

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
    title: "Medlemskap",
    children: [{ link: "/", title: "Bli Medlem" }],
  },
  {
    link: "/studentlife",
    title: "Studentliv",
    children: [
      {
        link: "/",
        title: "",
      },
    ],
  },
];

function Header({}: Props) {
  return (
    <header>
      <Link href={"/"}>
        <Image
          src="/UMS_logo_white.png"
          width={150}
          height={140}
          alt={"Logga"}
        ></Image>
      </Link>
      <nav style={{ color: "white" }}>
        <ul>
          <li>
            <Link href={"/membership"}> Medlemskap </Link>
          </li>
          <li>
            <Link href={"/contact"}> Kontakt </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
