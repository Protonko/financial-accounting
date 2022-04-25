export class CreateSpendingDto {
  readonly amount: number
  readonly category: {
    id: number
  }
  readonly date: string
  readonly description: string
}
