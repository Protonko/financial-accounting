import {insertValueToString} from 'utils'

describe('insertValueToString', () => {
  let stringWithBraces: string
  let stringWithoutBraces: string
  let stringWithSeveralBraces: string

  beforeEach(() => {
    stringWithBraces = 'Text with {}.'
    stringWithoutBraces = 'Text without braces.'
    stringWithSeveralBraces = 'Text with {} and {}.'
  })

  it('Should insert value instead of {}', () => {
    expect(insertValueToString(stringWithBraces, 'value')).toBe('Text with value.')
    expect(insertValueToString(stringWithSeveralBraces, 'foo', 'bar')).toBe('Text with foo and bar.')
  })

  it('Shouldn`t insert value instead of {}', () => {
    expect(insertValueToString(stringWithoutBraces, 'value')).toBe(stringWithoutBraces)
    expect(insertValueToString(stringWithoutBraces, 'value', 'value1')).toBe(stringWithoutBraces)
  })

  it('Should insert first value instead of {}', () => {
    expect(insertValueToString(stringWithBraces, 'foo', 'bar')).toBe('Text with foo.')
  })
})
