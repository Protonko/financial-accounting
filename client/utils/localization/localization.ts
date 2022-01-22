export enum APP_LANG {
  RU = 'RU',
  EN = 'EN',
}

export type LocalizationKeys =
  | 'switchToEnglish'
  | 'switchToRussian'
  | 'financingAccounting'
  | 'login'
  | 'email'
  | 'password'
  | 'logIn'
  | 'registration'
  | 'signUp'

export type Localization = Record<LocalizationKeys, string>
