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
    return this.spendingRepository.find({relations: ['category']})
  }

  getById(id: string) {
    return id
  }

  create(createSpendingDto: CreateSpendingDto) {
    return this.spendingRepository.save(createSpendingDto)
  }
}
