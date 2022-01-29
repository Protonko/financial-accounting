import type {AuthBody, UserData} from '@model/auth'
import {ApiService} from '@services/ApiService'

export class UserApiService {
  static login(body: AuthBody) {
    console.log(process.env)
    return ApiService.post<AuthBody, UserData>('auth/login', body)
  }
}
