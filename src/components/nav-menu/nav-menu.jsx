import { classNames } from 'util/class-names'

export const NavMenu = ({ menuItems, open }) => {
  return (
    <div
      className={classNames(
        open ? 'visible' : 'hidden',
        'absolute top-full right-0',
        'z-30 flex  flex-col gap-2 rounded-lg bg-almost-white py-2 px-4 drop-shadow'
      )}
    >
      {menuItems?.map((item, index) => {
        const { name, icon: Icon } = item
        return (
          <div className="flex  flex-row items-baseline gap-3" key={index}>
            {Icon !== undefined && <Icon className="h-4 w-4" />}
            <span className="cursor-pointer whitespace-nowrap capitalize text-medium-gray hover:text-almost-black">
              {name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
