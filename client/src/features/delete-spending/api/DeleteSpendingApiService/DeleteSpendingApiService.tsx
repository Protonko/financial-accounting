import {ApiService} from 'shared'

export class DeleteSpendingApiService {
  static deleteSpending(id: number) {
    return ApiService.delete<number>(`/spending/${id}`)
  }
}