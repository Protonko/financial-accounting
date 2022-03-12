import type {Category} from './category'

export interface Spending {
  amount: number,
  category: Category,
  comment?: string,
  date: string,
  id: number,
}

export interface SpendingFilters {
  page: number,
  accessToken?: string,
}