import {VFC, useRef} from 'react'
import {useMappedReportByCategoriesData, useDrawPieChart} from 'hooks'

export const ReportChart: VFC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const chartData = useMappedReportByCategoriesData()
  useDrawPieChart(svgRef, chartData, 450)

  return (
    <svg width={450} ref={svgRef} />
  )
}