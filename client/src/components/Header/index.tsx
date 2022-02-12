import Link from 'next/Link'
import logo from '@assets/icons/logo.png'
import {Options} from 'components'
import {useLocalization} from 'hooks'

export const Header = () => {
  const {getLocalizedValue} = useLocalization()

  return (
    <header className='header'>
      <div className="container header__container">
        <Link href="/">
          <a className='header__logo'>
            <div className='header__logo-image'>
              <img className="header__logo-image-pic" src={logo.src}  alt='Logo'/>
            </div>

            <span className="header__logo-title">
            {getLocalizedValue('financingAccounting')}
          </span>
          </a>
        </Link>

        <div className="header__options">
          <Options />
        </div>
      </div>
    </header>
  )
}
