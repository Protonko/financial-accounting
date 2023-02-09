import {VFC, useRef} from 'react'
import {useMappedReportByCategoriesData, useDrawPieChart} from 'hooks'

export const ReportChart: VFC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const chartData = useMappedReportByCategoriesData()
  useDrawPieChart(svgRef, chartData)

  return (
    <article className="report-chart">
      <svg width="100%" height="100%" ref={svgRef} />
    </article>
  )
}