import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import {Category} from '../../category/entities/category'
import {User} from '../../user/entities/user.entity'

@Entity('spending')
export class Spending {
  @Column({
    name: 'amount',
    type: 'float',
    default: 0.0,
  })
  amount: number

  @ManyToOne(() => Category)
  @JoinColumn({name: 'categoryId'})
  category: Category

  @Column()
  categoryId: number

  @Column()
  date: string

  @Column()
  description: string

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({name: 'userId'})
  public user: User

  @Column()
  public userId: number

  @PrimaryGeneratedColumn()
  id: number
}
