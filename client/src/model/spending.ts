import type {Category} from './category'

export interface Spending {
  amount: number,
  category: Category,
  description?: string,
  date: string,
  id: number,
}

export interface SpendingFilters {
  page: number,
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