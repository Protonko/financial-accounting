import {ajax, AjaxResponse, AjaxConfig} from 'rxjs/ajax'
import {map, Observable, throwError} from 'rxjs'
import {REST_METHOD} from 'model'

export class ApiService {
  private static baseUrl = 'http://localhost:3000/' // TODO: move to .env

  private static async fetchData<T extends BodyInit>(path: string, method: string, body?: T) {
    const url = new URL(ApiService.baseUrl + path).toString()
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3001', // TODO: move to .env
      },
      credentials: 'include',
      body,
    }

    const response = await fetch(url, options)

    return response.json()
  }

  private static handleResult<T>(result: Observable<AjaxResponse<T>>) {
    return result.pipe(
      map(response => response.response),
    )
  }

  static async get<T>(url: string) {
    try {
      const response = await ApiService.fetchData(url, 'GET')
      const d = await result.json()
      return ApiService.handleResult(result)
    } catch (error) {
      return throwError(error)
    }
  }

  static post<T, U>(url: string, body: T) {
    try {
      const result = ajax<U>(ApiService.fetchData(url, REST_METHOD.POST, body))
      return ApiService.handleResult(result)
    } catch (error) {
      console.log(error)
      return throwError(error)
    }
  }

  static put<T, U>(url: string, body: T) {
    try {
      const result = ajax<U>(ApiService.fetchData(url, REST_METHOD.PUT, body))
      return ApiService.handleResult(result)
    } catch (error) {
      return throwError(error)
    }
  }

  static patch<T, U>(url: string, body: T) {
    try {
      const result = ajax<U>(ApiService.fetchData(url, REST_METHOD.PATCH, body))
      return ApiService.handleResult(result)
    } catch (error) {
      return throwError(error)
    }
  }

  static delete<T>(url: string) {
    try {
      const result = ajax<T>(ApiService.fetchData(url, REST_METHOD.DELETE))
      return ApiService.handleResult(result)
    } catch (error) {
      return throwError(error)
    }
  }
}
