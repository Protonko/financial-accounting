import type {ReportByCategory} from 'model'
import {ApiService} from '@services/ApiService'

export class ReportApiService {
  static loadReportByCategories(startDate: string, endDate: string, headers?: Record<string, string>) {
    return ApiService.get<ReportByCategory[]>(`report/by-categories?startDate=${startDate}&endDate=${endDate}`, headers)
  }
}