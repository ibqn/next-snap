import { classNames } from 'util/class-names'
import ArrowDown from './arrow-down.svg'
import { NavMenu } from 'components/nav-menu'

export const NavItem = ({ openedMenu, setOpenedMenu, text, submenu }) => {
  const open = openedMenu === text

  return (
    <div className="relative">
      <button
        onClick={() => setOpenedMenu(open ? null : text)}
        className="relative flex cursor-pointer items-center"
      >
        <span className="peer mr-1 capitalize text-medium-gray hover:text-almost-black">
          {text}
        </span>
        {submenu !== undefined && (
          <ArrowDown
            className={classNames(
              open && '-rotate-180',
              'transition-all duration-300',
              'h-auto w-[10px] stroke-medium-gray peer-hover:stroke-almost-black'
            )}
          />
        )}
      </button>
      {submenu !== undefined && <NavMenu menuItems={submenu} open={open} />}
    </div>
  )
}
