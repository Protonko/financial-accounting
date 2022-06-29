import {FC, memo} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {APP_LANG} from 'utils'
import {ThemeToggleButton} from 'components'
import {useLocalization} from 'hooks'

export const Options: FC = memo(() => {
  const {asPath} = useRouter()
  const {lang, localization} = useLocalization()
  const localeToSwitch = lang === APP_LANG.RU ? APP_LANG.EN : APP_LANG.RU

  const changeLangText = lang === APP_LANG.RU ? localization.switchToEnglish : localization.switchToRussian
  const changeLangShortText = lang === APP_LANG.RU ? localization.eng : localization.rus

  return (
    <div className="options">
      <ul className="options__list list list--reset">
        <li className="options__item">
          <Link href={asPath} locale={localeToSwitch}>
            <a className='options__link' data-text={changeLangText} data-text-short={changeLangShortText} />
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
