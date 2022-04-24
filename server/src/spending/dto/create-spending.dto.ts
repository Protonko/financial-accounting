import {Category} from '../../category/entities/category'

export class CreateSpendingDto {
  readonly amount: number
  readonly category: Category
  readonly date: string
  readonly description: string
  readonly title: string
}
