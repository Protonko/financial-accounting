import type {FC} from 'react'
import type {Spending} from 'entities'
import {Box, Modal} from '@mui/material'
import {EditSpendingForm} from '../EditSpendingForm'

interface Props {
  selectedSpending?: Spending,
  closeModal: () => void,
}

export const SpendingEditModal: FC<Props> = ({selectedSpending, closeModal, children}) => {
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

  return (
    <>
      {children}
      <Modal
        className="modal"
        open={!!selectedSpending}
        onClose={closeModal}
      >
        <Box className="modal__box">
          {renderEditSpendingForm()}
        </Box>
      </Modal>
    </>
  )
}