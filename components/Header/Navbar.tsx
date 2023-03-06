import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CfImage } from "../../types/Elements";
import { NavLink } from "../../types/Pages";
import { FiMenu, FiX } from "react-icons/fi";
import { Navbar as NavbarType } from "../../types/Pages";

type Props = {
    logo: CfImage;
    navigationItems: NavLink[];
};

const Navbar = ({ logo, navigationItems }: NavbarType) => {
    const [nav, setNav] = useState(false);
    const [color, setcolor] = useState("transparent");
    const [textColor, settextColor] = useState("white");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const colorChange = () => {
            if (window.scrollY >= 90) {
                setcolor("white");
                settextColor("black");
            } else {
                setcolor("transparent");
                settextColor("white");
            }
        };
        window.addEventListener("scroll", colorChange);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
        >
            <nav className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
                <Link href={"/"}>
                    <Image
                        src={"https:" + logo.url}
                        width={logo.width}
                        height={logo.height}
                        alt={logo.filename}
                    ></Image>
                </Link>

                {/** Desktop? */}
                <ul
                    style={{ color: `${textColor}` }}
                    className="hidden sm:flex"
                    role="list"
                    aria-label="Primary"
                >
                    {navigationItems.map((link) => (
                        <li className="p-4 hover:text-cyan" key={link.title}>
                            <Link href={link.link}>{link.title}</Link>
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
                    {nav ? (
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
                        nav
                            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                    }
                >
                    <ul role="list" aria-label="Primary">
                        {navigationItems.map((link) => (
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
