import { classNames } from 'util/class-names'
import { useState } from 'react'
import ArrowDown from './arrow-down.svg'

export const NavItem = ({ text }) => {
  const [open, setOpen] = useState(false)

  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative flex cursor-pointer items-center"
    >
      <span className="peer mr-1 capitalize text-medium-gray hover:text-almost-black">
        {text}
      </span>
      <ArrowDown
        className={classNames(
          open && '-rotate-180',
          'transition-all duration-300',
          'h-auto w-[10px] stroke-medium-gray peer-hover:stroke-almost-black'
        )}
      />
    </button>
  )
}
