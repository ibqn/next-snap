import { NavItem } from 'components/nav-item'
import Link from 'next/link'
import { useState } from 'react'
import Logo from './logo.svg'
import { navLinks } from './nav-links'

export const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(null)

  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <Logo className="h-auto w-[84px]" />
      </Link>

      <nav className="flex gap-4">
        {navLinks.map((item, index) => {
          const { name, submenu } = item
          return (
            <NavItem
              openedMenu={openedMenu}
              setOpenedMenu={setOpenedMenu}
              key={index}
              text={name}
              submenu={submenu}
            />
          )
        })}
      </nav>
    </header>
  )
}
