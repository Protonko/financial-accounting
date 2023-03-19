import type {SpendingPage} from '../../model'
import {ApiService} from 'shared'

export class LoadSpendingApiService {
  static loadSpending(offset: number, size: number, headers?: Record<string, string>) {
    return ApiService.get<SpendingPage>(`spending?offset=${offset}&size=${size}`, headers)
  }
}