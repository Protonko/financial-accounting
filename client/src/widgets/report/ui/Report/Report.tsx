import type {VFC} from 'react'
import {ReportChart, ReportFilters, ReportListInfo} from '_entities'
import {useMappedReportByCategoriesData} from '../../lib'

interface Props {
  startDate: string,
  endDate: string,
}

export const Report: VFC<Props> = ({startDate, endDate}) => {
  const reportByCategories = useMappedReportByCategoriesData()

  return (
    <>
      <ReportFilters startDate={startDate} endDate={endDate} />
      <div className="reports">
        <ReportChart chartData={reportByCategories} />
        <ReportListInfo reportByCategories={reportByCategories} />
      </div>
    </>
  )
}
