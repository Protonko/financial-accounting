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
  category: {
    id: number,
  },
}