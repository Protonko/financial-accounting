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
} from '@nestjs/common'
import {CreateSpendingDto} from './dto/create-spending.dto'
import {UpdateSpendingDto} from './dto/update-spending.dto'
import {SpendingService} from './spending.service'

@Controller('spending')
export class SpendingController {
  constructor(private readonly spendingService: SpendingService) {}

  @Get()
  getAll() {
    return this.spendingService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.spendingService.getById(id)
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createSpendingDto: CreateSpendingDto) {
    return this.spendingService.create(createSpendingDto)
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return id
  }

  @Put(':id')
  update(
    @Body() updateSpendingDto: UpdateSpendingDto,
    @Param('id') id: string,
  ) {
    return JSON.stringify(updateSpendingDto) + id
  }
}
