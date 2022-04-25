import type {RootState} from '@store/reducers'
import type {Spending} from 'model'
import {useSelector} from 'react-redux'
import {Spending as SpendingComponent} from 'components'
import {useLocalization} from 'hooks'
import {APP_LANG} from 'utils'

export const SpendingList = () => {
  const {spending} = useSelector((state: RootState) => state.spending)
  const {lang} = useLocalization()

  const renderSpending = (spending: Spending) => {
    const date = new Date(spending.date).toLocaleDateString(lang)
    const categoryTitle = lang === APP_LANG.RU ? spending.category.titleRus : spending.category.titleEng

    return (
      <li className="spending-list__item" key={spending.id}>
        <SpendingComponent
          amount={spending.amount}
          category={categoryTitle}
          comment={spending.description}
          date={date}
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