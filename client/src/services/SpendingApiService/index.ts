import type {Spending, CreateSpendingBody} from 'model'
import {ApiService} from 'services'

export class SpendingApiService {
  static loadSpending(page: number, headers?: Record<string, string>) {
    return ApiService.get<Spending[]>('spending', headers)
  }

  static createSpending(body: CreateSpendingBody) {
    return ApiService.post<CreateSpendingBody, Spending>('spending/create', body)
  }
}