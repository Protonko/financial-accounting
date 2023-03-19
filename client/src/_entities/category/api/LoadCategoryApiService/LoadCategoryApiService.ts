import type {Category} from '../../model'
import {ApiService} from 'shared'

export class LoadCategoryApiService {
  static loadCategories(headers?: Record<string, string>) {
    return ApiService.get<Category[]>('categories', headers)
  }
}