import {APP_LANG, LocalizationKeys} from './localization'
import {localizationRu} from './ru'
import {localizationEn} from './en'

export const getLocalizedValue = (key: LocalizationKeys, lang: APP_LANG) => {
  return lang === APP_LANG.RU ? localizationRu[key] : localizationEn[key]}
