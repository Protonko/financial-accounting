import type {FC} from 'react'
import type {Spending} from 'model'
import type {RootState} from '@store/reducers'
import {useSelector} from 'react-redux'
import Link from 'next/link'
import {SpendingEditModal, Spending as SpendingComponent} from 'components'
import {APP_LANG} from 'utils'
import {useLocalization} from 'hooks'
import {useEditSpending} from './hooks'

export const SpendingList: FC = () => {
  const {spending, count} = useSelector((state: RootState) => state.spending)
  const {lang, localization} = useLocalization()
  const {selectedSpending, closeModal, prepareToEdit} = useEditSpending(spending ?? [])

  const renderShowMoreButton = () => {
    if (spending && spending.length < count) {
      return (
        <Link href="/expenses/list">
          <a className="spending-list__button link">{localization.showMore}</a>
        </Link>
      )
    }

    return null
  }

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
          id={spending.id}
          onEdit={prepareToEdit}
        />
      </li>
    )
  }

  if (spending) {
    return (
      <div className="spending-list">
        <SpendingEditModal selectedSpending={selectedSpending} closeModal={closeModal}>
          <ul className="spending-list__items list list--reset">
            {spending.map(renderSpending)}
          </ul>

          {renderShowMoreButton()}
        </SpendingEditModal>
      </div>
    )
  }

  return null
}