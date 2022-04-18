import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import {Category} from '../../category/entities/category'

@Entity('spending')
export class Spending {
  @Column()
  amount: number

  @ManyToOne(() => Category)
  @JoinColumn()
  category: Category

  @Column()
  date: string

  @Column()
  description: string

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string
}
