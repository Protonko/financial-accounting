import axios, {AxiosError, AxiosResponse} from 'axios'

export class ApiService {
  private static baseUrl = process.env.API_ENDPOINT
  private static api = axios.create({
    baseURL: ApiService.baseUrl,
    timeout: 2000,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': process.env.CORS ?? false,
    },
    withCredentials: true,
  })


  private static handleResult = <T>(
    promise: Promise<AxiosResponse<T>>,
  ): Promise<T | string> => {
    return new Promise((resolve, reject) => {
      promise
        .then((response) => {
          if (response.status >= 200 && response.status <= 300) {
            resolve(response.data)
          } else {
            reject(response.statusText)
          }
        })
        .catch((error: AxiosError) => reject(error.response))
    })
  }

  static async get<T>(url: string, extraHeaders?: Record<string, string>) {
    return ApiService.handleResult(ApiService.api.get<T>(url, {headers: extraHeaders}))
  }

  static post<T, U>(url: string, body: T) {
    return ApiService.handleResult(ApiService.api.post<U, AxiosResponse<U>, T>(url, body))
  }

  static put<T, U>(url: string, body: T) {
    return ApiService.handleResult(ApiService.api.put<U, AxiosResponse<U>, T>(url, body))
  }

  static patch<T, U>(url: string, body: T) {
    return ApiService.handleResult(ApiService.api.patch<U, AxiosResponse<U>, T>(url, body))
  }

  static delete<T>(url: string) {
    return ApiService.handleResult(ApiService.api.delete<T>(url))
  }
}
