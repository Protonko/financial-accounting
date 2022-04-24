import type {RootState} from '@store/reducers'
import type {Spending} from '@model/index'
import {useSelector} from 'react-redux'
import {Spending as SpendingComponent} from 'components'

export const SpendingList = () => {
  const {spending} = useSelector((state: RootState) => state.spending)

  const renderSpending = (spending: Spending) => {
    return (
      <li className="spending-list__item" key={spending.id}>
        <SpendingComponent
          amount={spending.amount}
          category={spending.category.title}
          comment={spending.description}
          date={spending.date}
          icon={spending.category.type}
        />
      </li>
    )
  }

  if (spending) {
    return (
      <ul className="spending-list list list--reset">
        {spending.map(renderSpending)}
      </ul>
    )
  }

  return null
}