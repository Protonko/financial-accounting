import * as d3 from 'd3'
import {RefObject, useCallback, useEffect} from 'react'
import {COLORS} from '@constants'

export interface ChartData {
  name: string,
  value: number
}

const PIE_CHART_COLORS = [
  COLORS.persianGreen,
  COLORS.strikeMaster,
  COLORS.disco,
  COLORS.blueViolet,
  COLORS.emerald,
  COLORS.steelBlue,
  COLORS.royalBLue,
  COLORS.screamingGreen,
  COLORS.persianPink,
  COLORS.brickRed,
  COLORS.goldenFizz,
  COLORS.flamingo,
  COLORS.brightTurquoise,
  COLORS.greenYellow,
  COLORS.electricViolet,
  COLORS.jaffa,
  COLORS.shiraz,
  COLORS.turquoise,
  COLORS.denim,
  COLORS.harlequin,
  COLORS.burntSienna,
]


export const useDrawPieChart = (svgRef: RefObject<SVGSVGElement>, data: ChartData[]) => {
  let svg: d3.Selection<Element, ChartData, null, undefined>
  let width = 0
  let height = 0

  const colors = d3.scaleOrdinal(PIE_CHART_COLORS)

  const drawSegments = () => d3.arc<d3.PieArcDatum<ChartData>>()
    .innerRadius(0)
    .outerRadius(width / 2)
    .padAngle(.05)
    .padRadius(50)

  const drawSections = (formattedData: d3.PieArcDatum<ChartData>[]) => {
    svg
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)
      .selectAll('path').data(formattedData)
      .enter()
      .append('path')
      .attr('d', drawSegments())
      .attr('fill', d => colors(d.data.value.toString()))
  }

  const drawText = (formattedData: d3.PieArcDatum<ChartData>[]) => {
    return d3
      .select('g')
      .selectAll('text')
      .data(formattedData)
      .enter()
      .append('text')
      .each(function (d) {
        const center = drawSegments().centroid(d)
        d3.select(this)
          .attr('x', center[0])
          .attr('y', center[1])
          .text(d.data.name)
      })
  }

  const drawPieChart = () => {
    svg
      .attr('width', width)
      .attr('height', height)

    const formattedData = d3.pie<ChartData>().sort(null).value(d => d.value)(data)
    drawSections(formattedData)
    drawText(formattedData)
  }


  const destroyChart = () => {
    svg.selectAll('*').remove()
  }

  const render = useCallback(() => {
    if (svgRef.current) {
      svg = d3.select<Element, ChartData>(svgRef.current)
      width = parseFloat(svg.style('width'))
      height = parseFloat(svg.style('width'))

      destroyChart()
      drawPieChart()
    }
  }, [])

  useEffect(() => {
    render()
  }, [data, render])
}