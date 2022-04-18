import {MigrationInterface, QueryRunner} from 'typeorm'

const CATEGORIES_MATRIX = [
  ['SHOPPING_CART', 'Shops'],
  ['CLOTHES', 'Clothes'],
  ['TABLEWARE', 'Restaurants'],
  ['PAW', 'Animals'],
  ['MASK', 'Cosplay'],
  ['ROCKING_HORSE', 'Toys'],
  ['DOMINO', 'Leisure'],
  ['HOUSE', 'House'],
  ['COSMETICS', 'Cosmetics'],
  ['INTERNET', 'internet'],
  ['CAR', 'Transport'],
  ['APPLICATION', 'Delivery'],
  ['DUMBBELL', 'Sport'],
  ['CANNED_FOOD', 'Paw'],
  ['PILLS', 'Pharmacy'],
  ['PIPE_SMOKE', 'Tobacco'],
  ['GAMEPAD', 'Paw'],
  ['PRESENT', 'Gifts'],
  ['CLEANING_MOP', 'Cleaning'],
  ['OASIS', 'Travelling'],
]

export class categories1650281559001 implements MigrationInterface {
  private getCategories() {
    let categoriesString = ''

    CATEGORIES_MATRIX.forEach((value, index, array) => {
      categoriesString += `(${index}, '${value[1]}', '${value[0]}')`
      categoriesString += array.length === index + 1 ? ';' : ','
    })

    return categoriesString
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.category ("id", "title", "type") VALUES ${this.getCategories()}`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM category;')
  }
}
