import {MappedReportByCategoriesData, useMappedReportByCategoriesData} from 'hooks'
import {ReportItem} from './ReportItem'

export const ReportListInfo = () => {
  const reportByCategories = useMappedReportByCategoriesData()

  const renderReportItem = ({ name, value, type }: MappedReportByCategoriesData) => (
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
