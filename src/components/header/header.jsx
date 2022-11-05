import { Button } from 'components/button'
import { NavItem } from 'components/nav-item'
import Link from 'next/link'
import { useState } from 'react'
import Logo from './logo.svg'
import { navLinks } from './nav-links'

export const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(null)

  return (
    <header className="flex items-center gap-8">
      <Link href="/">
        <Logo className="h-auto w-[84px]" />
      </Link>

      <nav className="mr-auto flex gap-4">
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
      <Button>sign in</Button>
      <Button hasBorder>sign up</Button>
    </header>
  )
}
