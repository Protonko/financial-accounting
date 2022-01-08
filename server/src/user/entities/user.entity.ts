import {Column, Entity, PrimaryGeneratedColumn, Unique} from 'typeorm'

@Entity('users')
@Unique(['email'])
export class User {
  @Column({})
  email: string

  @Column()
  fullName: string

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  password: string
}
