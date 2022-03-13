import {Injectable} from '@nestjs/common'
import {CreateSpendingDto} from './dto/create-spending.dto'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Spending} from './entities/spending'

@Injectable()
export class SpendingService {
  constructor(
    @InjectRepository(Spending)
    private spendingRepository: Repository<Spending>,
  ) {}

  getAll() {
    return [
      {amount: 1, category: {id: 1, type: 'AAA', title: 'aaa'}, id: 2, date: '12345'},
      {amount: 1000, category: {id: 1, type: 'SHOPPING_CART', title: 'Магазины'}, id: 3, date: '01.01.01'},
    ]
  }

  getById(id: string) {
    return id
  }

  create(createSpendingDto: CreateSpendingDto) {
    return this.spendingRepository.create(createSpendingDto)
  }
}
