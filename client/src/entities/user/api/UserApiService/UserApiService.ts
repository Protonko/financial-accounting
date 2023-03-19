import type {UserData, AuthBody} from '../../model'
import {ApiService} from 'shared'

export class UserApiService {
  static getUserInfo(headers?: Record<string, string>) {
    return ApiService.get<UserData>('user/info', headers)
  }

  static login(body: AuthBody) {
    return ApiService.post<AuthBody, UserData>('user/login', body)
  }
}
