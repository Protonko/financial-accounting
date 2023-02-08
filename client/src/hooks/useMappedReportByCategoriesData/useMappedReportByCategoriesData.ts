import {useLocalization} from '@hooks/useLocalization'
import {useSelector} from 'react-redux'
import {RootState} from '@store/reducers'
import {APP_LANG} from '@utils/localization/localization'

export const useMappedReportByCategoriesData = () => {
  const {lang} = useLocalization()
  const {reportByCategories} = useSelector((state: RootState) => state.report)
  const {categories} = useSelector((state: RootState) => state.categories)

  if (!categories || !reportByCategories) return []

  return reportByCategories.map(({ categoryId, amount }) => ({
    name: lang === APP_LANG.RU ? categories[categoryId]?.titleRus : categories[categoryId]?.titleEng,
    value: amount,
  }))
}