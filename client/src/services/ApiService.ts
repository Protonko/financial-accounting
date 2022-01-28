import {ajax, AjaxResponse, AjaxConfig} from 'rxjs/ajax'
import {map, Observable, throwError} from 'rxjs'

export class ApiService {
  private static baseUrl = 'http://localhost:3001/' // TODO: move to .env

  private static createAjaxConfig<T>(path: string, method: string, body?: T): AjaxConfig {
    const url = new URL(ApiService.baseUrl + path).toString()

    return {
      url,
      method,
      headers: {
        'Content-type': 'application/json',
      },
      withCredentials: true,
      body,
    }
  }

  private static handleResult<T>(result: Observable<AjaxResponse<T>>) {
    return result.pipe(
      map(response => response.response),
    )
  }

  static get<T>(url: string) {
    try {
      const result = ajax<T>(ApiService.createAjaxConfig(url, 'GET'))
      return ApiService.handleResult(result)
    } catch (error) {
      return throwError(error)
    }
  }

  static post<T, U>(url: string, body: T) {
    try {
      const result = ajax<U>(ApiService.createAjaxConfig(url, 'POST', body))
      return ApiService.handleResult(result)
    } catch (error) {
      return throwError(error)
    }
  }

  static put<T, U>(url: string, body: T) {
    try {
      const result = ajax<U>(ApiService.createAjaxConfig(url, 'PUT', body))
      return ApiService.handleResult(result)
    } catch (error) {
      return throwError(error)
    }
  }

  static patch<T, U>(url: string, body: T) {
    try {
      const result = ajax<U>(ApiService.createAjaxConfig(url, 'PATCH', body))
      return ApiService.handleResult(result)
    } catch (error) {
      return throwError(error)
    }
  }

  static delete<T>(url: string) {
    try {
      const result = ajax<T>(ApiService.createAjaxConfig(url, 'DELETE'))
      return ApiService.handleResult(result)
    } catch (error) {
      return throwError(error)
    }
  }
}
