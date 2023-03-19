import {useCallback, useEffect, useState, VFC} from 'react'
import {useSelector} from 'react-redux'
import {useLocalization, APP_LANG, SectionList, PAGE_SIZE} from 'shared'
import {Spending, SpendingReducer, SpendingCard} from '_entities'
import {useEditSpending, SpendingEditModal, useDeleteSpending} from 'features'
import {SpendingSectionHeader} from '../SpendingSectionHeader'
import {EmptySpendingList} from '../EmptySpendingList'
import {useLoadSpending} from '../../lib'

const mapSpendingGroupedByDateToSection = (state: SpendingReducer) => {
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

export const SpendingGroupedByDateList: VFC = () => {
  const {lang} = useLocalization()
  const loadSpending = useLoadSpending()
  const deleteSpending = useDeleteSpending()
  const spendingSection = useSelector(mapSpendingGroupedByDateToSection)
  const {spending, loading, count} = useSelector((state: SpendingReducer) => state.spending)
  const {selectedSpending, closeModal, prepareToEdit} = useEditSpending(spending ?? [])
  const [page, setPage] = useState(0)

  useEffect(() => {
    if (page) { // Prevent load page 0 twice
      loadSpending({
        offset: page * PAGE_SIZE,
        size: PAGE_SIZE,
      })
    }
  }, [page])

  const onEndReached = useCallback(() => {
    setPage(page => page + 1)
  }, [])

  const renderItem = useCallback(({category, description, ...item}: Spending) => {
    const categoryTitle = lang === APP_LANG.RU ? category.titleRus : category.titleEng

    return (
      <SpendingCard {...item} onDelete={deleteSpending} comment={description} category={categoryTitle} onEdit={prepareToEdit} icon={category.type} />
    )
  }, [deleteSpending, lang, prepareToEdit])

  const renderSectionHeader = useCallback(section => <SpendingSectionHeader dateString={section.title} />, [spendingSection, lang])

  const keyExtractor = useCallback(item => item.id.toString(), [])

  return (
    <SpendingEditModal selectedSpending={selectedSpending} closeModal={closeModal}>
      <SectionList<Spending>
        className="spending-grouped-by-date-list"
        ListEmptyComponent={EmptySpendingList}
        keyExtractor={keyExtractor}
        loading={loading}
        onEndReached={onEndReached}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={spendingSection}
        shouldLoadData={page * PAGE_SIZE <= count}
      />
    </SpendingEditModal>
  )
}