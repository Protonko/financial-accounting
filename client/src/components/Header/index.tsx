import {Link} from '@mui/material'
import logo from '@assets/icons/logo.png'
import {Options} from 'components'
import {useLocalization} from 'hooks'
import {useEffect} from 'react'

export const Header = () => {
  const {getLocalizedValue} = useLocalization()

  return (
    <header className='header'>
      <div className="container header__container">
        <Link href="/" className="header__logo">
          <div className='header__logo-image'>
            <img className="header__logo-image-pic" src={logo.src}  alt='Logo'/>
          </div>

          <span className="header__logo-title">
            {getLocalizedValue('financingAccounting')}
          </span>
        </Link>

        <div className="header__options">
          <Options />
        </div>
      </div>
    </header>
  )
}
