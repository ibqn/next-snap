import { classNames } from 'util/class-names'

export const Button = ({ children, hasBorder = false, isFilled = false }) => {
  return (
    <button
      className={classNames(
        'px-5 py-2 capitalize text-medium-gray',
        hasBorder && 'rounded-lg border-2 border-almost-black',
        isFilled &&
          'mx-0 rounded-lg border-2 border-almost-black bg-black py-4 px-6 font-semibold text-almost-white hover:bg-transparent hover:text-almost-black'
      )}
    >
      {children}
    </button>
  )
}
