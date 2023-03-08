import {LOCAL_DATE_REGEXP} from '@constants'

export class DateUtils {
  static getLocalDate(date: Date) {
  const [localDate] = date.toISOString().split('T')
  return localDate
}

  static getFirstLocalDateOfMonth() {
    const date = new Date()
    const firstDayOfMonth = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1))

    return DateUtils.getLocalDate(firstDayOfMonth)
  }

  static getLastLocalDateOfMonth() {
    const date = new Date();
    const lastDayOfMonth = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0))

    return DateUtils.getLocalDate(lastDayOfMonth)
  }

  static validateLocalDate(dateString: string) {
    return LOCAL_DATE_REGEXP.test(dateString) && !isNaN(new Date(dateString).getTime())
  }
}