import {ApiService} from 'services'
import type {Spending} from 'model'

export class SpendingApiService {
  static loadSpending(page: number, headers?: Record<string, string>) {
    return ApiService.get<Spending[]>('spending', headers)
  }
}