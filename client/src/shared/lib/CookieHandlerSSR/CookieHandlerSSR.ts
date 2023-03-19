import {IncomingMessage} from 'http'

export class CookieHandlerSSR {
  private req: IncomingMessage

  constructor(req: IncomingMessage) {
    this.req = req
  }

  getCookie(name: string) {
    return (
      this.req.headers.cookie
        ?.split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1] ?? ''
    )
  }

  setCookie(
    name: string,
    value: string,
    options: Record<string, any> = {},
  ) {
    options = {
      ...options,
    }

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString()
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

    for (let optionKey in options) {
      updatedCookie += '; ' + optionKey
      let optionValue = options[optionKey]
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue
      }
    }

    return updatedCookie
  }
}
