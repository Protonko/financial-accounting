import type {FC} from 'react'
import {APP_LANG} from '@utils/localization/localization'
import {ThemeToggleButton} from '@components/ThemeToggleButton'
import {useLocalization} from '@hooks/useLocalization'
import Link from 'next/link'
import {useRouter} from 'next/router'

export const Options: FC = () => {
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
      <ul className="options__list">
        <li className="option__item">
          <Link href={asPath} locale={localeToSwitch}>
            {renderText()}
          </Link>
        </li>

        <li>
          <ThemeToggleButton />
        </li>
      </ul>
    </div>
  )
}
