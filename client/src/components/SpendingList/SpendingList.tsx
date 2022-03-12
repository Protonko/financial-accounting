import type {RootState} from 'store/reducers'
import type {Spending} from 'model'
import {useSelector} from 'react-redux'
import {Spending as SpendingComponent} from 'components'

export const SpendingList = () => {
  const {spending} = useSelector((state: RootState) => state.spending)

  const renderSpending = (spending: Spending) => {
    return (
      <SpendingComponent
        amount={spending.amount}
        category={spending.category.title}
        comment={spending.comment}
        date={spending.date}
        icon={spending.category.type}
        key={spending.id}
      />
    )
  }

  if (spending) {
    return (
      <ul className="expenses__list list list--reset">
        {spending.map(renderSpending)}
      </ul>
    )
  }

  return null
}