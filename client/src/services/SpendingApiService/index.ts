import type {Spending, CreateSpendingBody, UpdateSpendingBody} from 'model'
import {ApiService} from 'services'

export class SpendingApiService {
  static loadSpending(page: number, headers?: Record<string, string>) {
    return ApiService.get<Spending[]>('spending', headers)
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