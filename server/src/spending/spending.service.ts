import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common'
import {CreateSpendingDto} from './dto/create-spending.dto'
import {InjectRepository} from '@nestjs/typeorm'
import {Between, Repository} from 'typeorm'
import {Spending} from './entities/spending'
import {CategoryService} from '../category/category.service'
import {UpdateSpendingDto} from './dto/update-spending.dto'
import {LOCAL_DATE_REGEXP} from '../static/regexps'

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

  async getAllByUserId(userId: number, offset: number, size: number) {
    const [data, count] = await this.spendingRepository.findAndCount({
      where: {userId},
      order: {date: 'DESC'},
      take: size,
      skip: offset,
      relations: ['category'],
    })

    return {
      data,
      count,
    }
  }

  async getAllByUserIdAndDate(
    userId: number,
    startDate: string,
    endDate: string,
  ) {
    const data = await this.spendingRepository.find({
      where: {
        userId,
        date: Between(startDate, endDate),
      },
      order: {date: 'DESC'},
      relations: ['category'],
    })

    return {data}
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

    if (!LOCAL_DATE_REGEXP.test(createSpendingDto.date)) {
      throw new BadRequestException('Incorrect date format.')
    }

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

    if (!LOCAL_DATE_REGEXP.test(updateSpendingDto.date)) {
      throw new BadRequestException('Incorrect date format.')
    }

    return this.spendingRepository.findOne(id, {relations: ['category']})
  }
}
