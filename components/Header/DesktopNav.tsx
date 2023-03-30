import React from 'react'
import DesktopNavItem from './DesktopNavItem'
import { NavLink } from '../../types/Pages'

type Props = {
    navigationItems: Array<NavLink>
}

const DesktopNav = ({ navigationItems }: Props) => {
    return (
        <ul
            className={" navbar hidden lg:flex gap-2 mt-8"}
            role="list"
            aria-label="Primary"
        >
            {navigationItems.map((link, i) =>
                (<DesktopNavItem key={i} link={link} />)
            )}
        </ul>
    )
}

export default DesktopNav