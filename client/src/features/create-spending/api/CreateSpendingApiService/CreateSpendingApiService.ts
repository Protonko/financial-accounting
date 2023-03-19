import type {Spending, CreateSpendingBody} from 'entities'
import {ApiService} from 'shared'

export class CreateSpendingApiService {
  static createSpending(body: CreateSpendingBody) {
    return ApiService.post<CreateSpendingBody, Spending>('spending', body)
  }
}