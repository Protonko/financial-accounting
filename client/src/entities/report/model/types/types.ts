export interface ReportByCategory {
  categoryId: number,
  amount: number,
}

export interface ReportByCategoriesFilters {
  startDate: string,
  endDate: string,
  accessToken?: string,
}
