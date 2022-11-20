import { Button } from 'components/button'
import { NavItem } from 'components/nav-item'
import Link from 'next/link'
import { useState } from 'react'
import Logo from './logo.svg'
import { navLinks } from './nav-links'

import MenuIcon from './menu-icon.svg'
import CloseMenuIcon from './close-menu-icon.svg'
import { MobileMenu } from 'components/mobile-menu'

export const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <header className="flex w-full items-center gap-8">
      <Link href="/">
        <Logo className="h-auto w-[84px]" />
      </Link>

      <nav className="mr-auto hidden gap-4 xl:flex ">
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
      <Button className="hidden xl:flex">sign in</Button>
      <Button className="hidden xl:flex" hasBorder>
        sign up
      </Button>
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="z-20 ml-auto flex xl:hidden"
      >
        {mobileMenu ? <CloseMenuIcon /> : <MenuIcon />}
      </button>
      <MobileMenu
        className="visible z-10 xl:hidden"
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
    </header>
  )
}
