import type {ReportReducer, CategoryReducer} from 'entities'
import {useSelector} from 'react-redux'
import {useLocalization, APP_LANG} from 'shared'

export interface MappedReportByCategoriesData {
  name: string,
  value: number,
  type: string
}

export const useMappedReportByCategoriesData = (): MappedReportByCategoriesData[] => {
  const {lang} = useLocalization()
  const {reportByCategories} = useSelector((state: ReportReducer) => state.report)
  const {categories} = useSelector((state: CategoryReducer) => state.categories)

  if (!categories || !reportByCategories) return []

  return reportByCategories.map(({ categoryId, amount }) => ({
    name: lang === APP_LANG.RU ? categories[categoryId]?.titleRus : categories[categoryId]?.titleEng,
    value: amount,
    type: categories[categoryId]?.type
  }))
}