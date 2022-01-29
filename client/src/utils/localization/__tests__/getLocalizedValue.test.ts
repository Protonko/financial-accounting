import {getLocalizedValue, APP_LANG} from 'utils'

describe('getLocalizedValue', () => {
  let stringWithBraces: string
  let stringWithoutBraces: string
  let stringWithSeveralBraces: string

  beforeEach(() => {
    stringWithBraces = 'Text with {}.'
    stringWithoutBraces = 'Text without braces.'
    stringWithSeveralBraces = 'Text with {} and {}.'
  })

  it('Should return localized value', () => {
    expect(getLocalizedValue('fieldIsRequired', APP_LANG.RU)).toBe('Поле не должно быть пустым')
    expect(getLocalizedValue('fieldIsRequired', APP_LANG.EN)).toBe('Field is required')
  })
})
