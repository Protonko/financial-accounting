import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('spending')
export class Spending {
  @Column()
  amount: number

  @Column()
  category: string

  @Column()
  date: string

  @Column()
  description: string

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string
}
