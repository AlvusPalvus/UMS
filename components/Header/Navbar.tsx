import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CfImage } from "../../types/Elements";
import { NavLink } from "../../types/Pages";
import { FiMenu, FiX } from "react-icons/fi";
import { Navbar as NavbarType } from "../../types/Pages";

type Props = {
  navbar: NavbarType;
};

const Navbar = ({ navbar }: Props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  //   const [color, setcolor] = useState("transparent");
  //   const [textColor, settextColor] = useState("white");
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
    window.addEventListener("scroll", colorChange);
  }, []);

  let color = ["transparent", "white"];
  let textColor = ["white", "black"];
  let inverted = ["invert(0)", "invert(1)"];

  return (
    <div
      style={{ backgroundColor: scrolled ? `${color[1]}` : `${color[0]}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <nav className="container m-auto flex justify-between items-center p-4 text-white">
        <Link href={"/"}>
          <Image
            style={{ filter: scrolled ? `${inverted[1]}` : `${inverted[0]}` }}
            src={"https:" + navbar.logo.url}
            width={navbar.logo.width}
            height={navbar.logo.height}
            alt={navbar.logo.filename}
          ></Image>
        </Link>

        {/** Desktop? */}
        <ul className="hidden sm:flex" role="list" aria-label="Primary">
          {navbar.navigationItems.map((link) => (
            <li
              className="navbar p-4 hover:bg-blend-color-dodge"
              key={link.title}
            >
              <Link
                style={{
                  color: scrolled ? `${textColor[1]}` : `${textColor[0]}`,
                }}
                href={link.link}
              >
                {link.title}
              </Link>
              {/* if(link.subPages.length>0) */}
            </li>
          ))}
        </ul>

        {/* Mobile button */}

        <button
          className="block sm:hidden z-10"
          aria-controls="primary-navigation"
          onClick={() => handleNav()}
        >
          {showMobileNav ? (
            <>
              <FiX />
              <span className="visually-hidden">Menu</span>
            </>
          ) : (
            <>
              <FiMenu />
              <span className="visually-hidden">Menu</span>
            </>
          )}
        </button>

        <div
          className={
            showMobileNav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul role="list" aria-label="Primary">
            {navbar.navigationItems.map((link) => (
              <li
                className="p-2 m-1 text-1xl hover:text-gray-500 cursor-pointer"
                onClick={() => handleNav()}
                key={link.link}
              >
                <Link href={link.link}>{link.title}</Link>
                {/* if(link.subPages.length>0) */}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
