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
  | 'dontHaveAnAccountQuestion'
  | 'alreadyHaveAnAccountQuestion'
  | 'incorrectEmailAddress'
  | 'fieldIsRequired'
  | 'minimumPasswordLength'
  | 'expenses'
  | 'categories'
  | 'reports'
  | 'comment'
  | 'create'
  | 'edit'
  | 'delete'
  | 'amount'
  | 'date'
  | 'category'

export type Localization = Record<LocalizationKeys, string>
