import type {Spending} from 'model'
import {ApiService} from 'services'

export class SpendingApiService {
  static loadSpending(page: number, headers?: Record<string, string>) {
    return ApiService.get<Spending[]>('spending', headers)
  }
}