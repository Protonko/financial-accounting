import {ApiService} from 'services'

export class DeleteSpendingApiService {
  static deleteSpending(id: number) {
    return ApiService.delete<number>(`spending/${id}`)
  }
}