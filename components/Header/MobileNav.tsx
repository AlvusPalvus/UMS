import Link from 'next/link'
import React, { useState } from 'react'
import { FiX, FiMenu } from 'react-icons/fi'
import { NavLink } from '../../types/Pages'
import MobileDropdownItem from './MobileDropdownItem'
import { useCurrentNav, useNavScrollStyling } from '../../hooks/nav'

type Props = {
  navigationItems: Array<NavLink>
}

const MobileNav = ({ navigationItems }: Props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { currentLink, currentSubLink } = useCurrentNav();
  const { backgroundColor, textColor, dropDownBgColor, hoverColor, margin, scrolled } = useNavScrollStyling();
  const handleNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
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
          className="flex flex-col m-6 w-2/6"
          role="list"
          aria-label="Primary"
        >
          {navigationItems.map((link, i) => {
            const isCurrent = currentLink === link.link;
            return (
              <li
                className={" border-b-2 border-white" + "flex flex-col group hover:bg-opacity-20 hover:bg-white"}
                key={i}
              >
                {link.sublinks ? (
                  <MobileDropdownItem
                    link={link}
                  />
                ) : (
                  <div className="flex items-center group">
                    <Link className="p-2" href={link.link}>
                      {link.title}
                    </Link>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div></>
  )
}

export default MobileNav