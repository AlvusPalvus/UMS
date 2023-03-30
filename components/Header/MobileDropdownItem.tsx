import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { NavLink } from "../../types/Pages";
import { useNavScrollStyling } from "../../hooks/nav";

type Props = {
  link: NavLink;
};

const MobileDropdownItem = ({
  link,
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const { textColor, dropDownBgColor, hoverColor } = useNavScrollStyling()
  const onClick = () => setIsActive(!isActive);
  let active = "block";
  let inactive = "hidden";



  return (
    <>
      <div className="flex items-center group">
        <Link className="w-full pl-4 pr-1 py-2 block" href={link.link}>
          {link.title}
        </Link>

        {isActive ? <FiChevronUp onClick={() => setIsActive(false)} className="cursor-pointer text-4xl p-2" /> : <FiChevronDown onClick={() => setIsActive(true)} className="cursor-pointer text-4xl p-2" />}

      </div>
      <ul
        className={
          `${isActive ? "flex" : "hidden"}` +
          " flex-col "
        }
        role="list"
      >
        {link.sublinks.map((sublink, i) => (
          <li className={"navItem fw-regular z-[4]"} key={i}>
            <Link
              className={"text-white block px-4 py-2"}
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

export default MobileDropdownItem;
