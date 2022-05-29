import {useTheme} from 'next-themes'
import Sun from '@assets/icons/sun.svg'
import Crescent from '@assets/icons/crescent.svg'
import {APP_THEME} from 'model'

export const ThemeToggleButton = () => {
  const {theme, setTheme} = useTheme()

  return (
    <button className='theme-toggle-button' onClick={() => setTheme(theme === APP_THEME.DARK ? APP_THEME.LIGHT : APP_THEME.DARK)}>
      <div className="theme-toggle-button__container">
        <Sun className='theme-toggle-button__icon theme-toggle-button__icon--sun' />
        <Crescent className='theme-toggle-button__icon theme-toggle-button__icon--crescent' />
      </div>
    </button>
  )
}
