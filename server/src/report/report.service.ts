import {BadRequestException, Injectable} from '@nestjs/common'
import {SpendingService} from '../spending/spending.service'
import {LOCAL_DATE_REGEXP} from '../static/regexps'
import {ReportByCategory} from '../model/ReportByCategory'

@Injectable()
export class ReportService {
  constructor(private readonly spendingService: SpendingService) {}

  async getReportByCategories(
    userId: number,
    startDate: string,
    endDate: string,
  ) {
    if (
      !LOCAL_DATE_REGEXP.test(startDate) ||
      !LOCAL_DATE_REGEXP.test(endDate)
    ) {
      throw new BadRequestException('Incorrect date format.')
    }

    const {data} = await this.spendingService.getAllByUserIdAndDate(
      userId,
      startDate,
      endDate,
    )

    return data.reduce<ReportByCategory[]>((report, spending) => {
      const existentCategoryIndex = report.findIndex(
        (data) => data.categoryId === spending.categoryId,
      )

      if (existentCategoryIndex !== -1) {
        report[existentCategoryIndex].amount += spending.amount
      } else {
        report.push({
          categoryId: spending.categoryId,
          amount: spending.amount,
        })
      }

      return report
    }, [])
  }
}
