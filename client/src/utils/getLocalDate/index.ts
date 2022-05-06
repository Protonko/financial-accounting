export const getLocalDate = (date: Date) => {
  const [localDate] = date.toISOString().split('T')
  return localDate
}