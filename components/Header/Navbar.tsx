import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CfImage } from "../../types/Elements";
import { NavLink } from "../../types/Pages";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Navbar as NavbarType } from "../../types/Pages";
import DropdownItem from "./MobileDropdownItem";
import { useCurrentNav, useNavScrollStyling } from '../../hooks/nav';
import DesktopNavItem from "./DesktopNavItem";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

type Props = {
  navbar: NavbarType;
};

const Navbar = ({ navbar }: Props) => {
  const { backgroundColor, textColor, dropDownBgColor, hoverColor, margin, scrolled } = useNavScrollStyling();

  return (
    <div
      className={
        backgroundColor +
        " fixed left-0 top-0 w-full max-h-fit z-10  ease-in duration-300"
      }
    >
      <nav
        className={
          margin + " container flex justify-between items-center  text-white"
        }
      >
        <Link href={"/"}>
          {scrolled ? (
            <Image
              className="invert py-2"
              src={"https:" + navbar.logo.url}
              width={46}
              height={46}
              alt={navbar.logo.filename}
            ></Image>
          ) : (
            <>
              <Image
                className="invert-0 hidden lg:flex"
                src={"https:" + navbar.logo.url}
                width={120}
                height={120}
                alt={navbar.logo.filename}
              ></Image>
              <Image
                className="invert-0 flex lg:hidden mt-4"
                src={"https:" + navbar.logo.url}
                width={64}
                height={64}
                alt={navbar.logo.filename}
              ></Image>
            </>
          )}
        </Link>

        <DesktopNav navigationItems={navbar.navigationItems} />

        <MobileNav navigationItems={navbar.navigationItems} />
      </nav>
    </div>
  );
};

export default Navbar;
