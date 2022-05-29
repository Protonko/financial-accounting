import type {AuthBody, UserData} from '@model/auth'
import {ApiService} from 'services'

export class UserApiService {
  static login(body: AuthBody) {
    return ApiService.post<AuthBody, UserData>('user/login', body)
  }

  static create(body: AuthBody) {
    return ApiService.post<AuthBody, UserData>('user', body)
  }

  static getUserInfo(headers?: Record<string, string>) {
    return ApiService.get<UserData>('user/info', headers)
  }
}
