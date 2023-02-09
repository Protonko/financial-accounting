import {memo, VFC} from 'react'
import {useCategoriesIcons} from '@hooks/useCategoriesIcons'

interface Props {
  type: string,
  title: string,
  amount: number,
}

export const ReportItem: VFC<Props> = memo(({type, title, amount}) => {
  const getIcon = useCategoriesIcons()

  return (
    <article className="report-item">
      <span className="report-item__icon">
        {getIcon(type)}
      </span>

      <div className="report-item__data">
        <h2 className="report-item__title">{title}</h2>
        <span className="report-item__amount">{amount}</span>
      </div>
    </article>
  )
})

ReportItem.displayName = 'ReportItem'
