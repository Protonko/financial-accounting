import type {Spending} from 'model'
import type {RootState} from '@store/reducers'
import {useCallback} from 'react'
import {useSelector} from 'react-redux'
import {SectionList, Spending as SpendingComponent, SpendingEditModal} from 'components'
import {APP_LANG} from 'utils'
import {useLocalization} from 'hooks'
import {useEditSpending} from './hooks'

const mapSpendingGroupedByDateToSection = (state: RootState) => {
  if (!state.spending.spending) {
    return []
  }

  const spendingGroupedByDate = state.spending.spending.reduce((acc, current) => {
    if (acc[current.date]) {
      acc[current.date].push(current)
    } else {
      acc[current.date] = [current]
    }

    return acc
  }, {} as Record<string, Spending[]>)

  return Object.entries(spendingGroupedByDate).map(elem => ({
    title: elem[0],
    data: elem[1],
  }))
}

export const SpendingGroupedByDateList = () => {
  const {lang} = useLocalization()
  const spendingSection = useSelector(mapSpendingGroupedByDateToSection)
  const {spending} = useSelector((state: RootState) => state.spending)
  const {selectedSpending, closeModal, prepareToEdit} = useEditSpending(spending ?? [])

  const renderItem = useCallback(({category, description, ...item}: Spending) => {
    const categoryTitle = lang === APP_LANG.RU ? category.titleRus : category.titleEng

    return (
      <SpendingComponent {...item} comment={description} category={categoryTitle} onEdit={prepareToEdit} icon={category.type} />
    )
  }, [spendingSection, lang])

  const keyExtractor = useCallback(item => item.id.toString(), [])

  return (
    <SpendingEditModal selectedSpending={selectedSpending} closeModal={closeModal}>
      <SectionList<Spending>
        ListEmptyComponent={() => <div>123</div>}
        keyExtractor={keyExtractor}
        loading={false}
        onEndReached={() => {}}
        renderItem={renderItem}
        renderSectionHeader={() => <div>Header</div>}
        sections={spendingSection}
      />
    </SpendingEditModal>
  )
}