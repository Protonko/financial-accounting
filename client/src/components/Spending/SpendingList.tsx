import type {RootState} from '@store/reducers'
import type {Spending} from 'model'
import {FC, useCallback, useState} from 'react'
import {useSelector} from 'react-redux'
import {Modal, Box} from '@mui/material'
import {EditSpendingForm, Spending as SpendingComponent} from 'components'
import {useLocalization} from 'hooks'
import {APP_LANG} from 'utils'

export const SpendingList: FC = () => {
  const {spending} = useSelector((state: RootState) => state.spending)
  const {lang} = useLocalization()
  const [selectedSpending, setSelectedSpending] = useState<Spending>()

  const closeModal = useCallback(() => setSelectedSpending(undefined), [])

  const prepareToEdit = useCallback((id: number) => {
    const selectedSpending = spending?.find(spending => spending.id === id)

    if (selectedSpending) {
      setSelectedSpending(selectedSpending)
    }
  }, [])

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

  const renderEditSpendingForm = () => {
    if (selectedSpending) {
      return (
        <EditSpendingForm
          amount={selectedSpending.amount.toString()}
          categoryId={selectedSpending.category.id}
          date={selectedSpending.date}
          description={selectedSpending.description ?? ''}
          id={selectedSpending.id}
          onSubmit={closeModal}
        />
      )
    }

    return null
  }

  if (spending) {
    return (
      <>
        <ul className="spending-list list list--reset">
          {spending.map(renderSpending)}
        </ul>
        <Modal
          className="spending-list__modal modal"
          open={!!selectedSpending}
          onClose={closeModal}
        >
          <Box className="spending-list__modal-box modal__box">
            {renderEditSpendingForm()}
          </Box>
        </Modal>
      </>
    )
  }

  return null
}