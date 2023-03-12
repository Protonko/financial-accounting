import * as d3 from 'd3'
import {RefObject, useCallback, useEffect} from 'react'
import {COLORS} from '@constants'
import {APP_LANG} from 'utils'

export interface ChartData {
  name: string,
  value: number
}

const MAX_SECTIONS_WITH_TEXT = 4

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

export const useDrawPieChart = (svgRef: RefObject<SVGSVGElement>, data: ChartData[], lang: APP_LANG) => {
  let svg: d3.Selection<Element, ChartData, null, undefined>
  let width = 0
  let height = 0

  const totalSum = d3.sum(data, ({value}) => value)

  const colors = d3.scaleOrdinal(PIE_CHART_COLORS)

  const drawSegments = () => d3.arc<d3.PieArcDatum<ChartData>>()
    .innerRadius(0)
    .outerRadius(width / 2)

  const drawSections = (formattedData: d3.PieArcDatum<ChartData>[]) => {
    svg
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)
      .selectAll('path').data(formattedData)
      .enter()
      .append('path')
      .attr('d', drawSegments())
      .attr('fill', value => colors(value.data.value.toString()))
  }

  const drawText = (formattedData: d3.PieArcDatum<ChartData>[]) => {
    const slicedData = formattedData.slice(0, MAX_SECTIONS_WITH_TEXT)
    return d3
      .select('g')
      .selectAll('text')
      .data(slicedData)
      .enter()
      .append('text')
      .text((value) => {
        if (value.value / totalSum > .1) {
          return value.data.name
        }
        return null
      })
      .attr('transform', value => `translate(${drawSegments().centroid(value)})`)
      .style('text-anchor', 'middle')
      .style('font-size', 17)
  }

  const drawTooltip = (g: d3.Selection<SVGGElement, ChartData, null, undefined>, value: number) => {
    if (!value) {
      g.style('display', 'none')
      return;
    }

    g.style('display', null)
      .style('pointer-events', 'none')
      .style('font', '10px sans-serif')

    const path = g
      .selectAll('path')
      .data([null])
      .join('path')
      .attr('fill', COLORS.white)
      .attr('stroke', COLORS.shark)

    const text = g
      .selectAll('text')
      .data([null])
      .join('text')
      .call(text =>
        text
          .selectAll('tspan')
          .data(value.toString().split(/\n/))
          .join('tspan')
          .attr('x', 0)
          .attr('y', (_, i) => `${i * 1.1}em`)
          .style('font-weight', (_, i) => i ? null : 'bold')
          .text(value => value)
      )

    const {y, width, height} = (text.node() as SVGSVGElement).getBBox()

    text.attr('transform', `translate(${-width / 2},${15 - y})`)
    path.attr('d', `M${-width / 2 - 10},5H-5l5,-5l5,5H${width / 2 + 10}v${height + 20}h-${width + 20}z`)
  }

  const createTooltip = () => {
    const tooltip = svg.append('g')

    const moveListener = (event: MouseEvent, chartData: d3.PieArcDatum<ChartData>) => {
      tooltip
        .attr('transform', `translate(${event.offsetX}, ${event.offsetY})`)
        .call(drawTooltip, `
          ${chartData.data.name}\n
          ${new Intl.NumberFormat(lang).format(chartData.value)}
          ${((chartData.value / totalSum) * 100).toFixed(1)}%
        `)
    }

    svg.selectAll<Element, d3.PieArcDatum<ChartData>>('path').on('touchmove mousemove', moveListener)
    svg.selectAll<Element, d3.PieArcDatum<ChartData>>('text').on('touchmove mousemove', moveListener)
    svg.on('touched mouseleave', () => tooltip.call(drawTooltip, null))
  }

  const drawPieChart = () => {
    svg
      .attr('width', width)
      .attr('height', height)

    const formattedData = d3.pie<ChartData>().value(({value}) => value)(data.sort((prev, next) => next.value - prev.value))
    drawSections(formattedData)
    drawText(formattedData)
    createTooltip()
  }


  const destroyChart = () => {
    svg.selectAll('*').remove()
  }

  const render = useCallback(() => {
    if (svgRef.current) {
      svg = d3.select<Element, ChartData>(svgRef.current)
      svg
        .attr('width', '100%')
        .attr('height', '100%')
      width = parseFloat(svg.style('width'))
      height = parseFloat(svg.style('width'))

      destroyChart()
      drawPieChart()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', render)

    return () => window.removeEventListener('resize', render)
  }, [])

  useEffect(() => {
    render()
  }, [data, render])
}