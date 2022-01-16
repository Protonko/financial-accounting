import type {FC} from 'react'
import type {APP_THEME} from '@model/app-settings'
import {APP_LANG} from '@utils/localization/localization'
import {getLocalizedValue} from '@utils/localization/getLocalizedValue'
import {ThemeToggleButton} from '@components/ThemeToggleButton'

interface Props {
  lang: APP_LANG;
  theme: APP_THEME;
}

export const Options: FC<Props> = ({lang}) => {
  return (
    <div className="options">
      <ul className="options__list">
        <li className="option__item">
          {getLocalizedValue(lang === APP_LANG.RU ? 'switchToEnglish' : 'switchToRussian', lang)}
        </li>

        <li>
          <ThemeToggleButton />
        </li>
      </ul>
    </div>
  )
}
