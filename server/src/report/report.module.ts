import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Spending} from '../spending/entities/spending'
import {Category} from '../category/entities/category'
import {SpendingService} from '../spending/spending.service'
import {CategoryService} from '../category/category.service'
import {ReportController} from './report.controller'
import {ReportService} from './report.service'

@Module({
  imports: [TypeOrmModule.forFeature([Spending, Category])],
  providers: [SpendingService, CategoryService, ReportService],
  controllers: [ReportController],
})
export class ReportModule {}
