import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  titleRus: string

  @Column()
  titleEng: string

  @Column()
  type: string
}
