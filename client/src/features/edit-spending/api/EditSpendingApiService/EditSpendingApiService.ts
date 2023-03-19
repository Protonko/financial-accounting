import type {Spending, UpdateSpendingBody} from '_entities'
import {ApiService} from 'shared'

export class EditSpendingApiService {
  static editSpending(body: UpdateSpendingBody) {
    return ApiService.put<UpdateSpendingBody, Spending>(`spending/${body.id}`, body)
  }
}