import { NavItem } from 'components/nav-item'
import Link from 'next/link'
import Logo from './logo.svg'
import { navLinks } from './nav-links'

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <Logo className="h-auto w-[84px]" />
      </Link>

      <nav className="flex gap-4">
        {navLinks.map((item, index) => {
          const { name } = item
          return <NavItem key={index} text={name} />
        })}
      </nav>
    </header>
  )
}
