import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { isTemplateSpan } from "typescript";
import ReactMarkdown from "react-markdown";

type Props = {
  logoSrc: string;
  navigationItems: any;
  heroSrc: string;
  heroContent: string;
};

type NavLink = {
  title: string;
  link: string;
};

type MenuItem = {
  children?: NavLink[];
} & NavLink;

const parseNavItem = (navItem) => {
  let subPages = [];
  if (navItem.fields.subpages !== undefined) {
    subPages = navItem.fields.subpages.map((item) => parseNavItem(item));
  }
  return {
    link: navItem.fields.link,
    title: navItem.fields.pageTitle,
    subPages,
  };
};

const getLinks = (navigationItems) => {
  const links = navigationItems.map((navItem) => parseNavItem(navItem));
  return links;
};

function Header({ logoSrc, navigationItems, heroSrc, heroContent }: Props) {
  const links = getLinks(navigationItems);

  return (
    <header
      style={{ backgroundImage: "url(https:" + heroSrc + ")" }}
      className={styles.header}
    >
      <div className={styles.navbar}>
        <Link href={"/"}>
          <Image
            src={"https:" + logoSrc}
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
                {/* if(link.subPages.length>0) */}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ReactMarkdown className={styles.heroContent}>
        {heroContent}
      </ReactMarkdown>
    </header>
  );
}

export default Header;
