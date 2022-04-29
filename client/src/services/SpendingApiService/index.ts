import type {Spending, CreateSpendingBody, UpdateSpendingBody, SpendingPage} from 'model'
import {ApiService} from 'services'

export class SpendingApiService {
  static loadSpending(offset: number, size: number, headers?: Record<string, string>) {
    return ApiService.get<SpendingPage>(`spending?offset=${offset}&size=${size}`, headers)
  }

  static createSpending(body: CreateSpendingBody) {
    return ApiService.post<CreateSpendingBody, Spending>('spending/create', body)
  }

  static deleteSpending(id: number) {
    return ApiService.delete<number>(`spending/${id}`)
  }

  static editSpending(body: UpdateSpendingBody) {
    return ApiService.put<UpdateSpendingBody, Spending>(`spending/${body.id}`, body)
  }
}