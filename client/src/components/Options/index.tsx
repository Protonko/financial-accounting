import {memo, FC} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import {APP_LANG} from 'utils'
import {ThemeToggleButton} from 'components'
import {useLocalization} from 'hooks'

export const Options: FC = memo(() => {
  const {asPath} = useRouter()
  const {lang, getLocalizedValue} = useLocalization()
  const localeToSwitch = lang === APP_LANG.RU ? APP_LANG.EN : APP_LANG.RU
  const renderText = () => {
    if (lang === APP_LANG.RU) {
      return getLocalizedValue('switchToEnglish')
    } else {
      return getLocalizedValue('switchToRussian')
    }
  }

  return (
    <div className="options">
      <ul className="options__list list list--reset">
        <li className="options__item">
          <Link href={asPath} locale={localeToSwitch}>
            <a className='options__link'>
              {renderText()}
            </a>
          </Link>
        </li>

        <li className="options__item">
          <ThemeToggleButton />
        </li>
      </ul>
    </div>
  )
})

Options.displayName = 'Options'
