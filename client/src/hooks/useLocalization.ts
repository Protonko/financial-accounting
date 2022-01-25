import {useRouter} from 'next/router'
import {APP_LANG, LocalizationKeys} from '@utils/localization/localization'
import {getLocalizedValue} from '@utils/localization/getLocalizedValue'

export const useLocalization = () => {
  const {locale, defaultLocale} = useRouter()
  let lang: APP_LANG

  if (locale && locale in APP_LANG) {
    lang = locale as APP_LANG
  } else if (defaultLocale && defaultLocale in APP_LANG) {
    lang = defaultLocale as APP_LANG
  } else {
    lang = APP_LANG.RU
  }

  return {lang, getLocalizedValue: (key: LocalizationKeys) => getLocalizedValue(key, lang as APP_LANG)}
}
