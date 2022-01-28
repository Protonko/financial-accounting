import type {AuthBody, UserData} from '@model/auth'
import {ApiService} from '@services/ApiService'

export class UserApiService {
  static login(body: AuthBody) {
    return ApiService.post<AuthBody, UserData>('/user/login', body)
  }
}
