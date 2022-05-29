import {useRouter} from 'next/router'
import {APP_LANG, localizationObject} from '@utils/index'

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

  return {lang, localization: localizationObject[lang]}
}
