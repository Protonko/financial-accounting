import type {AuthBody, UserData} from '@model/auth'
import {ApiService} from 'services'

export class UserApiService {
  static login(body: AuthBody) {
    return ApiService.post<AuthBody, UserData>('auth/login', body)
  }
}
