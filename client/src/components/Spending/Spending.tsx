import type {FC} from 'react'
import {useCategoriesIcons} from 'hooks'

interface Props {
  amount: number,
  category: string,
  comment?: string,
  date: string,
  icon: string,
}

export const Spending: FC<Props> = ({
  amount,
  category,
  comment,
  date,
  icon,
}) => {
  const getIcon = useCategoriesIcons()

  return (
    <article className="spending">
      <div className="spending__row spending__row--space-between">
        <div className="spending__col">
          <div className="spending__image">
            {getIcon(icon)}
          </div>

          <div className="spending__data">
            <h2 className="spending__data-text spending__data-text--bold">{category}</h2>
            <span className="spending__data-text">{comment ?? ''}</span>
          </div>
        </div>

        <div className="spending__col">
          <div className="spending__data">
            <span className="spending__data-text spending__data-text--price">{amount}</span>
            <span className="spending__data-text">{date}</span>
          </div>
        </div>
      </div>
    </article>
  )
}