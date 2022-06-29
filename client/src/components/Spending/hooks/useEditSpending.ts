import type {Spending} from 'model'
import {useCallback, useState} from 'react'

export const useEditSpending = (spending: Spending[]) => {
  const [selectedSpending, setSelectedSpending] = useState<Spending>()

  const closeModal = useCallback(() => setSelectedSpending(undefined), [])

  const prepareToEdit = useCallback((id: number) => {
    const selectedSpending = spending.find(spending => spending.id === id)

    if (selectedSpending) {
      setSelectedSpending(selectedSpending)
    }
  }, [spending])

  return {selectedSpending, closeModal, prepareToEdit}
}