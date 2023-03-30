import Link from 'next/link'
import React from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { NavLink } from '../../types/Pages'
import { useCurrentNav, useNavScrollStyling } from '../../hooks/nav'

type Props = {
    link: NavLink,
}

const DesktopNavItem = (props: Props) => {
    const { textColor, dropDownBgColor, hoverColor } = useNavScrollStyling()
    const { link } = props
    const { currentLink, currentSubLink } = useCurrentNav()
    const linkTextColor = currentLink === link.link ? "text-primaryGreen" : textColor

    return (
        <li className={linkTextColor + hoverColor + " group relative pr-2 "}>
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
    )
}

export default DesktopNavItem