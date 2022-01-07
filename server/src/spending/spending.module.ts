import {Module} from '@nestjs/common'
import {SpendingService} from './spending.service'
import {SpendingController} from './spending.controller'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Spending} from './entities/spending'

@Module({
  imports: [TypeOrmModule.forFeature([Spending])],
  providers: [SpendingService],
  controllers: [SpendingController],
})
export class SpendingModule {}
