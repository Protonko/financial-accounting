import {MigrationInterface, QueryRunner} from 'typeorm'

const CATEGORIES_MATRIX = [
  ['SHOPPING_CART', 'Shops', 'Магазины'],
  ['CLOTHES', 'Clothes', 'Одежда'],
  ['TABLEWARE', 'Restaurants', 'Рестораны'],
  ['PAW', 'Animals', 'Животные'],
  ['MASK', 'Cosplay', 'Косплей'],
  ['ROCKING_HORSE', 'Toys', 'Игрушки'],
  ['DOMINO', 'Leisure', 'Досуг'],
  ['HOUSE', 'House', 'Дом'],
  ['COSMETICS', 'Cosmetics', 'Косметика'],
  ['INTERNET', 'internet', 'Интернет'],
  ['CAR', 'Transport', 'Транспорт'],
  ['APPLICATION', 'Delivery', 'Доставка'],
  ['DUMBBELL', 'Sport', 'Спорт'],
  ['CANNED_FOOD', 'CANNED_FOOD', 'Еда'],
  ['PILLS', 'Medicines', 'Лекарства'],
  ['PIPE_SMOKE', 'Tobacco', 'Табак'],
  ['GAMEPAD', 'Games', 'Игры'],
  ['PRESENT', 'Gifts', 'Подарки'],
  ['CLEANING_MOP', 'Cleaning', 'Уборка'],
  ['OASIS', 'Travelling', 'Путешествия'],
]

export class categories1650891650944 implements MigrationInterface {
  private getCategories() {
    let categoriesString = ''

    CATEGORIES_MATRIX.forEach((value, index, array) => {
      categoriesString += `(${index}, '${value[2]}', '${value[1]}', '${value[0]}')`
      categoriesString += array.length === index + 1 ? ';' : ','
    })

    return categoriesString
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.category ("id", "titleRus", "titleEng", "type") VALUES ${this.getCategories()}`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM category;')
  }
}
