import type {AuthBody, UserData} from '@model/auth'
import {ApiService} from 'services'

export class UserApiService {
  static login(body: AuthBody) {
    return ApiService.post<AuthBody, UserData>('user/login', body)
  }

  static create(body: AuthBody) {
    return ApiService.post<AuthBody, UserData>('user/create', body)
  }

  static getUserInfo() {
    return ApiService.get<UserData>('user/info')
  }
}
