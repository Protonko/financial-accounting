import {Link} from '@mui/material'
import logo from '@assets/icons/logo.png'
import {Options} from '@components/Options'
import {useLocalization} from '@hooks/useLocalization'

export const Header = () => {
  const {getLocalizedValue} = useLocalization()

  return (
    <header className='header'>
      <div className="container header__container">
        <div className='header__logo'>
          <Link href="/" className="header__logo-link">
            <img className="header__logo-image" src={logo.src}  alt='Logo'/>
          </Link>

          <span className="header__logo-title">
            {getLocalizedValue('financingAccounting')}
          </span>
        </div>

        <div className="header__options">
          <Options />
        </div>
      </div>
    </header>
  )
}
