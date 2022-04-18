import {Controller, Get, UseGuards} from '@nestjs/common'
import {CategoryService} from './category.service'
import {JwtAuthGuard} from '../auth/guards/jwt-auth.guard'

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.categoryService.getAll()
  }
}
