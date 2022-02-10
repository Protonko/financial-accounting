import axios, {AxiosError, AxiosResponse} from 'axios'

export class ApiService {
  private static baseUrl = 'http://localhost:3000/' // TODO: move to .env
  private static api = axios.create({
    baseURL: ApiService.baseUrl,
    timeout: 2000,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3001', // TODO: move to .env
    },
    withCredentials: true,
  })

  private static handleResult = <T>(
    promise: Promise<AxiosResponse<T>>,
  ): Promise<T | AxiosResponse> => {
    return new Promise((resolve, reject) => {
      promise
        .then((response) => { // TODO: 401 / 403
          resolve(response.data)
        })
        .catch((error: AxiosError) => reject(error.response))
    })
  }

  static async get<T>(url: string) {
    return ApiService.handleResult(ApiService.api.get<T>(url))
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
