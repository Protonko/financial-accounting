import {BadRequestException, Injectable} from '@nestjs/common'
import {CreateSpendingDto} from './dto/create-spending.dto'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Spending} from './entities/spending'
import {CategoryService} from '../category/category.service'

@Injectable()
export class SpendingService {
  constructor(
    @InjectRepository(Spending)
    private spendingRepository: Repository<Spending>,
    private readonly categoryService: CategoryService,
  ) {}

  getAll() {
    return this.spendingRepository.find({relations: ['category']})
  }

  getById(id: string) {
    return id
  }

  async create(createSpendingDto: CreateSpendingDto) {
    const categoryId = createSpendingDto.category.id
    const category = await this.categoryService.getById(categoryId)

    if (!categoryId || !category) {
      throw new BadRequestException('Incorrect category id.')
    }

    const {id} = await this.spendingRepository.save(createSpendingDto)
    return this.spendingRepository.findOne(id, {relations: ['category']})
  }
}
