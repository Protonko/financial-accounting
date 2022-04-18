import type {Category} from 'model'
import {ApiService} from 'services'

export class CategoryApiService {
  static loadCategories(headers?: Record<string, string>) {
    return ApiService.get<Category[]>('categories', headers)
  }
}