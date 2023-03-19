import {useLocalization} from 'shared'

export const EmptySpendingList = () => {
  const {localization} = useLocalization()

  return (
    <div className="empty-spending-list">
      <span className="empty-spending-list__title">
        {localization.noSpending}
      </span>
    </div>
  )
}