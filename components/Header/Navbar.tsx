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
  let textColor = scrolled ? "text-black" : "text-white";
  console.log(textColor);
  let inverted = ["invert(0)", "invert(1)"];

  return (
    <div
      style={{ backgroundColor: scrolled ? `${color[1]}` : `${color[0]}` }}
      className=" fixed left-0 top-0 w-full max-h-fit z-10 ease-in duration-300"
    >
      <nav className="container flex justify-between items-start m-4 text-white">
        <Link href={"/"}>
          {scrolled ? (
            <Image
              style={{ filter: scrolled ? `${inverted[1]}` : `${inverted[0]}` }}
              src={"https:" + navbar.logo.url}
              width={46}
              height={46}
              alt={navbar.logo.filename}
            ></Image>
          ) : (
            <>
              <Image
                style={{
                  filter: scrolled ? `${inverted[1]}` : `${inverted[0]}`,
                }}
                className="hidden lg:flex"
                src={"https:" + navbar.logo.url}
                width={120}
                height={120}
                alt={navbar.logo.filename}
              ></Image>
              <Image
                style={{
                  filter: scrolled ? `${inverted[1]}` : `${inverted[0]}`,
                }}
                className="flex lg:hidden"
                src={"https:" + navbar.logo.url}
                width={64}
                height={64}
                alt={navbar.logo.filename}
              ></Image>
            </>
          )}
        </Link>

        {/** Desktop */}
        <ul
          className=" navbar hidden lg:flex gap-6 mt-8"
          role="list"
          aria-label="Primary"
        >
          {navbar.navigationItems.map((link, i) => (
            <li
              className={textColor + " navItem group w-full relative px-4 py-1"}
              key={i}
            >
              <Link href={link.link}>{link.title}</Link>
              {link.sublinks && (
                <ul
                  className={
                    textColor +
                    " hidden absolute left-0 mt-1 group-hover:flex flex-col bg-black bg-opacity-100"
                  }
                  role="list"
                >
                  {link.sublinks.map((link, i) => (
                    <li className="navItem fw-regular px-4 py-2 z-[4]" key={i}>
                      <Link
                        style={{
                          color: scrolled
                            ? `${textColor[1]}`
                            : `${textColor[0]}`,
                        }}
                        href={link.link}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="block lg:hidden z-10"
          aria-controls="primary-navigation"
          onClick={() => handleNav()}
        >
          {showMobileNav ? (
            <>
              <FiX className="text-4xl m-3" />
              <span className="visually-hidden">Menu</span>
            </>
          ) : (
            <>
              <FiMenu className={textColor + " text-4xl m-3"} />
              <span className="visually-hidden">Menu</span>
            </>
          )}
        </button>

        <div
          className={
            showMobileNav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul role="list" aria-label="Primary">
            {navbar.navigationItems.map((link) => (
              <li
                className="navbar group"
                onClick={() => handleNav()}
                key={link.link}
              >
                <Link href={link.link}>{link.title}</Link>
                {link.sublinks && (
                  <ul className="hidden group-hover:flex flex-col" role="list">
                    {link.sublinks.map((link, i) => (
                      <li className="navItem" key={i}>
                        <Link
                          style={{
                            color: scrolled
                              ? `${textColor[1]}`
                              : `${textColor[0]}`,
                          }}
                          href={link.link}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
