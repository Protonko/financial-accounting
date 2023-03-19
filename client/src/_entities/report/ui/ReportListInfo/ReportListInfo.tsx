import type {VFC} from 'react'
import type {ReportData} from '../types'
import {ReportItem} from './ReportItem'

interface Props {
  reportByCategories: ReportData[]
}

export const ReportListInfo: VFC<Props> = ({ reportByCategories }) => {
  const renderReportItem = ({ name, value, type }: ReportData) => (
    <li>
      <ReportItem key={name} title={name} amount={value} type={type} />
    </li>
  )

  return (
    <ul className="report-list-info list list--reset">
      {reportByCategories?.map(renderReportItem)}
    </ul>
  )
}
