export const insertValueToString = (string: string, ...values: string[]) => {
  const regex = /{}/
  let newString = string
  values.forEach(value => {
    newString = newString.replace(regex, value)
  })

  return newString
}