import type {ReportData} from '../types'
import {VFC, useRef} from 'react'
import {useDrawPieChart, useLocalization} from 'shared'

interface Props {
  chartData: ReportData[]
}

export const ReportChart: VFC<Props> = ({ chartData }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const {lang} = useLocalization()

  useDrawPieChart(svgRef, chartData, lang)

  return (
    <article className="report-chart">
      <svg width="100%" height="100%" ref={svgRef} />
    </article>
  )
}