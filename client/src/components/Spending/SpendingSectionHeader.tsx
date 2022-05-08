import {memo} from 'react'
import {useLocalization} from 'hooks'

interface Props {
  dateString: string
}

export const SpendingSectionHeader = memo(({dateString}: Props) => {
  const {lang} = useLocalization()
  const date = new Date(dateString).toLocaleDateString(lang)

  return (
    <div className="spending-section-header">
      <span className="spending-section-header__title">
        {date}
      </span>
    </div>
  )
})

SpendingSectionHeader.displayName = 'SpendingSectionHeader'