import type {FC} from 'react'
import Link from 'next/Link'
import logo from '@assets/icons/logo.png'
import {Options, useLocalization} from 'shared'
import {HeaderTabs} from './HeaderTabs'

interface Props {
  withTabs?: boolean,
}

export const Header: FC<Props> = ({withTabs}) => {
  const {localization} = useLocalization()

  return (
    <header className='header'>
      <div className="container header__container">
        <Link href="/">
          <a className='header__logo'>
            <div className='header__logo-image'>
              <img className="header__logo-image-pic" src={logo.src}  alt='Logo'/>
            </div>

            <span className="header__logo-title">
            {localization.financingAccounting}
          </span>
          </a>
        </Link>

        {withTabs && <HeaderTabs />}

        <div className="header__options">
          <Options />
        </div>
      </div>
    </header>
  )
}
