import type {Spending} from 'model'
import type {RootState} from '@store/reducers'
import {useCallback, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {SpendingSectionHeader, EmptySpendingList, SectionList, Spending as SpendingComponent, SpendingEditModal} from 'components'
import {APP_LANG, getPaginationParams} from 'utils'
import {useActions, useLocalization} from 'hooks'
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
  const router = useRouter()
  const {loadSpending} = useActions()
  const spendingSection = useSelector(mapSpendingGroupedByDateToSection)
  const {spending, loading} = useSelector((state: RootState) => state.spending)
  const {selectedSpending, closeModal, prepareToEdit} = useEditSpending(spending ?? [])

  useEffect(() => {
    const page = getPaginationParams(router.query.page)

    // if (page) { // Prevent load page 0 twice
    //   loadSpending({
    //     offset: page * PAGE_SIZE,
    //     size: PAGE_SIZE,
    //   })
    // }
  }, [router.query.page])

  const renderItem = useCallback(({category, description, ...item}: Spending) => {
    const categoryTitle = lang === APP_LANG.RU ? category.titleRus : category.titleEng

    return (
      <SpendingComponent {...item} comment={description} category={categoryTitle} onEdit={prepareToEdit} icon={category.type} />
    )
  }, [spendingSection, lang])

  const renderSectionHeader = useCallback(section => <SpendingSectionHeader dateString={section.title} />, [spendingSection, lang])

  const keyExtractor = useCallback(item => item.id.toString(), [])

  return (
    <SpendingEditModal selectedSpending={selectedSpending} closeModal={closeModal}>
      <SectionList<Spending>
        className="spending-grouped-by-date-list"
        ListEmptyComponent={EmptySpendingList}
        keyExtractor={keyExtractor}
        loading={loading}
        onEndReached={() => {
          // TODO: FIX
          const page = getPaginationParams(router.query.page) ?? 0
          router.push({query: {page: page + 1}}, undefined, {shallow: true})
          // getSpending()
        }}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={spendingSection}
      />
    </SpendingEditModal>
  )
}