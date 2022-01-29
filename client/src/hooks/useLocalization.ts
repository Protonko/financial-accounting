import {useRouter} from 'next/router'
import {APP_LANG, LocalizationKeys, getLocalizedValue} from 'utils'

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
