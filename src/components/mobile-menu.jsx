import { classNames } from 'util/class-names'

export const MobileMenu = ({ className, mobileMenu, setMobileMenu }) => {
  return (
    <div
      className={classNames(
        className,
        'absolute top-0 right-0 h-screen min-w-[50%] bg-pink-200',
        mobileMenu ? 'translate-x-0' : 'translate-x-[200%]',
        'transition-all duration-300'
      )}
    >
      MobileMenu
    </div>
  )
}
