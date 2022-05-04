import type {Category} from './category'

export interface SpendingPage {
  data: Spending[],
  count: number,
}

export interface SpendingGroupedByDatePage {
  data: SpendingGroupedByDate,
  count: number,
}

export interface Spending {
  amount: number,
  category: Category,
  description?: string,
  date: string,
  id: number,
}

export type SpendingGroupedByDate = Record<string, Spending[]>

export interface SpendingFilters {
  offset: number,
  size: number
  accessToken?: string,
}

export interface CreateSpendingBody {
  amount: number,
  description: string,
  date: string,
  categoryId: number,
}

export interface UpdateSpendingBody {
  id: number,
  amount: number,
  description: string,
  date: string,
  categoryId: number,
}