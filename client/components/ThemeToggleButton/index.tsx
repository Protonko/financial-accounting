import {APP_THEME} from '@model/app-settings'
import Sun from '@assets/icons/sun.svg'
import Crescent from '@assets/icons/crescent.svg'

interface Props {
  theme: APP_THEME
}

export const ThemeToggleButton = ({theme}: Props) => {
  return (
    <button className='theme-toggle-button'>
      <Sun className='theme-toggle-button__icon theme-toggle-button__icon--sun' />
      <Crescent className='theme-toggle-button__icon theme-toggle-button__icon--crescent' />
    </button>
  )
}
