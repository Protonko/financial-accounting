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
  getAll() {
    return this.spendingService.getAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.spendingService.getById(id)
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createSpendingDto: CreateSpendingDto) {
    return this.spendingService.create(createSpendingDto)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return id
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Body() updateSpendingDto: UpdateSpendingDto,
    @Param('id') id: string,
  ) {
    return JSON.stringify(updateSpendingDto) + id
  }
}
