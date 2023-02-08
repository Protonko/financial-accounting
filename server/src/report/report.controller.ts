import {Controller, Get, Query, Req, UseGuards} from '@nestjs/common'
import {ReportService} from './report.service'
import {JwtAuthGuard} from '../auth/guards/jwt-auth.guard'

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @UseGuards(JwtAuthGuard)
  @Get('by-categories')
  getReportByCategories(
    @Req() request: Express.Request,
    @Query() query: {startDate: string; endDate: string},
  ) {
    return this.reportService.getReportByCategories(
      request.user.id,
      query.startDate,
      query.endDate,
    )
  }
}
