import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common'
import {CreateSpendingDto} from './dto/create-spending.dto'
import {UpdateSpendingDto} from './dto/update-spending.dto'
import {SpendingService} from './spending.service'
import {JwtAuthGuard} from '../auth/guards/jwt-auth.guard'

@Controller('spending')
export class SpendingController {
  constructor(private readonly spendingService: SpendingService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(
    @Req() request: Express.Request,
    @Query() query: {offset: number; size: number},
  ) {
    return this.spendingService.getAllByUserId(
      request.user.id,
      query.offset,
      query.size,
    )
  }

  @UseGuards(JwtAuthGuard)
  @Get('/grouped-by-date')
  getSpendingGroupedByDate(
    @Req() request: Express.Request,
    @Query() query: {offset: number; size: number},
  ) {
    return this.spendingService.getSpendingGroupedByDate(
      request.user.id,
      query.offset,
      query.size,
    )
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  create(
    @Req() request: Express.Request,
    @Body() createSpendingDto: CreateSpendingDto,
  ) {
    return this.spendingService.create(createSpendingDto, request.user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteById(@Req() request: Express.Request, @Param('id') id: string) {
    return this.spendingService.deleteById(id, request.user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Body() updateSpendingDto: UpdateSpendingDto,
    @Param('id') id: number,
  ) {
    return this.spendingService.update(updateSpendingDto, id)
  }
}
