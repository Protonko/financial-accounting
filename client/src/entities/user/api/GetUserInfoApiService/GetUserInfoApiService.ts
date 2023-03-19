import type {UserData} from '../../model'
import {ApiService} from 'shared'

export class GetUserInfoApiService {
  static getUserInfo(headers?: Record<string, string>) {
    return ApiService.get<UserData>('user/info', headers)
  }
}
