import {VFC, useRef} from 'react'
import {useMappedReportByCategoriesData, useDrawPieChart, useLocalization} from 'hooks'

export const ReportChart: VFC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const chartData = useMappedReportByCategoriesData()
  const {lang} = useLocalization()

  useDrawPieChart(svgRef, chartData, lang)

  return (
    <article className="report-chart">
      <svg width="100%" height="100%" ref={svgRef} />
    </article>
  )
}