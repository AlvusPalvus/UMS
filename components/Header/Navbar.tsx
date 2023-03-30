import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CfImage } from "../../types/Elements";
import { NavLink } from "../../types/Pages";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Navbar as NavbarType } from "../../types/Pages";
import MobileDropdownItem from "./MobileDropdownItem";

type Props = {
  navbar: NavbarType;
};

const Navbar = ({ navbar }: Props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  useEffect(() => {
    const colorChange = () => {
      if (window.scrollY >= 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    colorChange();
    window.addEventListener("scroll", colorChange);
  }, []);

  // Scrollbased styling
  let backgroundColor = scrolled ? "bg-white" : "bg-transparent";
  let textColor = scrolled ? "text-black" : "text-white";
  let dropDownBgColor = scrolled ? " bg-white" : " bg-black bg-opacity-30 ";
  let hoverColor = scrolled
    ? " hover:bg-primaryGreen hover:text-white "
    : " hover:bg-black hover:bg-opacity-30 ";
  let margin = scrolled ? "" : "m-4";

  return (
    <div
      className={
        backgroundColor +
        " fixed left-0 top-0 w-full max-h-fit z-10 ease-in duration-300"
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

        {/** Desktop Nav*/}
        <ul
          className={" navbar hidden lg:flex gap-2 mt-8"}
          role="list"
          aria-label="Primary"
        >
          {navbar.navigationItems.map((link, i) =>
            getDesktopNavItems(link, i, textColor, dropDownBgColor, hoverColor)
          )}
        </ul>

        {/* Mobile button */}
        <button
          className="block lg:hidden z-10 mt-4 mr-4 sm:mr-8  fixed right-0"
          aria-controls="primary-navigation"
          onClick={() => handleNav()}
        >
          {showMobileNav ? (
            <>
              <FiX className="text-5xl p-2" />
              <span className="visually-hidden">Menu</span>
            </>
          ) : (
            <>
              <FiMenu className={textColor + " text-5xl p-2 "} />
              <span className="visually-hidden">Menu</span>
            </>
          )}
        </button>

        {/* Mobile Nav */}
        <div
          className={
            showMobileNav
              ? "lg:hidden fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-black opacity-90 text-left ease-in duration-300"
              : "lg:hidden fixed top-0 left-[-100%] right-0 bottom-0 w-full h-screen bg-black text-left ease-in duration-300"
          }
        >
          <ul
            className="flex flex-col m-6 w-4/6"
            role="list"
            aria-label="Primary"
          >
            {navbar.navigationItems.map((link, i) => (
              <li
                className="flex flex-col group hover:bg-opacity-20 hover:bg-white border-b-2 border-white"
                key={i}
              >
                {link.sublinks ? (
                  <MobileDropdownItem
                    link={link}
                    textColor={textColor}
                    dropDownBgColor={dropDownBgColor}
                    hoverColor={hoverColor}
                  />
                ) : (
                  <div className="flex items-center group">
                    <Link
                      className="pl-4 py-2 hover:font-bold "
                      href={link.link}
                    >
                      {link.title}
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

const getDesktopNavItems = (
  link,
  i,
  textColor,
  dropDownBgColor,
  hoverColor
) => {
  return (
    <li className={textColor + hoverColor + " group relative pr-2 "} key={i}>
      <div className="flex items-center group">
        <Link className="w-full pl-4 pr-1 py-2 block" href={link.link}>
          {link.title}
        </Link>
        {link.sublinks && (
          <>
            <FiChevronDown className="group-hover:hidden cursor-pointer" />
            <FiChevronUp className="hidden group-hover:block cursor-pointer" />
          </>
        )}
      </div>

      {link.sublinks && (
        <ul
          className={
            dropDownBgColor +
            " hidden absolute left-0 group-hover:flex flex-col"
          }
          role="list"
        >
          {link.sublinks.map((sublink, i) => (
            <li className={hoverColor + " fw-regular z-[4]"} key={i}>
              <Link
                className={textColor + hoverColor + " block px-4 py-2"}
                href={link.link + "/#" + sublink.link}
              >
                {sublink.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navbar;
