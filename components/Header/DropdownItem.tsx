import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { NavLink } from "../../types/Pages";

type Props = {
  link: NavLink;
  textColor: string;
  dropDownBgColor: string;
  hoverColor: string;
};

const DropdownItem = ({
  link,
  textColor,
  dropDownBgColor,
  hoverColor,
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  let active = "block";
  let inactive = "hidden";

  console.log(link.sublinks);
  return (
    <>
      <div className="flex items-center group">
        <Link className="w-full pl-4 pr-1 py-2 block" href={link.link}>
          {link.title}
        </Link>

        <>
          <FiChevronDown className="group-hover:hidden cursor-pointer" />
          <FiChevronUp className="hidden group-hover:block cursor-pointer" />
        </>
      </div>
      <ul
        className={
          `menu ${isActive ? active : inactive}` +
          " absolute left-0 group-hover:flex flex-col "
        }
        role="list"
      >
        {link.sublinks.map((sublink, i) => (
          <li className={hoverColor + "navItem fw-regular z-[4]"} key={i}>
            <Link
              className={textColor + " block px-4 py-2"}
              href={link.link + "/#" + sublink.link}
            >
              {sublink.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownItem;
