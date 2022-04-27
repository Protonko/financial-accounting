import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common'
import {CreateSpendingDto} from './dto/create-spending.dto'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Spending} from './entities/spending'
import {CategoryService} from '../category/category.service'
import {UpdateSpendingDto} from './dto/update-spending.dto';

@Injectable()
export class SpendingService {
  constructor(
    @InjectRepository(Spending)
    private spendingRepository: Repository<Spending>,
    private readonly categoryService: CategoryService,
  ) {}

  private getById(id: string) {
    return this.spendingRepository.findOne(id)
  }

  getAllByUserId(userId: number) {
    return this.spendingRepository.find({
      where: {userId},
      relations: ['category'],
    })
  }

  async deleteById(id: string, userId: number) {
    const spending = await this.getById(id)

    if (spending.userId !== userId) {
      throw new ForbiddenException()
    }

    await this.spendingRepository.delete(id)
    return id
  }

  async create(createSpendingDto: CreateSpendingDto, userId: number) {
    const category = await this.categoryService.getById(
      createSpendingDto.categoryId,
    )

    if (!category) {
      throw new BadRequestException('Incorrect category id.')
    }

    const {id} = await this.spendingRepository.save({
      ...createSpendingDto,
      userId,
    })
    return this.spendingRepository.findOne(id, {relations: ['category']})
  }

  async update(updateSpendingDto: UpdateSpendingDto, id: number) {
    await this.spendingRepository.update(id, updateSpendingDto)
    return this.spendingRepository.findOne(id, {relations: ['category']})
  }
}
