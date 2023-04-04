import type {AuthBody, UserData} from '_entities'
import {ApiService} from 'shared'

export class SignUpApiService {
  static create(body: AuthBody) {
    return ApiService.post<AuthBody, UserData>('/user', body)
  }
}
