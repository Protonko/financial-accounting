import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {SpendingService} from './spending.service'
import {SpendingController} from './spending.controller'
import {Spending} from './entities/spending'
import {CategoryService} from '../category/category.service'
import {Category} from '../category/entities/category'

@Module({
  imports: [TypeOrmModule.forFeature([Spending, Category])],
  providers: [SpendingService, CategoryService],
  controllers: [SpendingController],
})
export class SpendingModule {}
