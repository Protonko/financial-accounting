import {Link} from '@mui/material'
import logo from '@assets/icons/logo.png'
import {Options} from '@components/Options'
import {APP_LANG} from '@utils/localization/localization'

export const Header = () => {
  return (
    <header className='header'>
      <div className="container header__container">
        <div className='header__logo'>
          <Link href="/" className="header__logo-link">
            <img className="header__logo-image" src={logo.src}  alt='Logo'/>
          </Link>

          <span className="header__logo-title">
            Financing Accounting
          </span>
        </div>

        <div className="header__options">
          <Options lang={APP_LANG.RU} />
        </div>
      </div>
    </header>
  )
}
