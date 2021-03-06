import {memo, FC} from 'react'
import {Menu, MenuItem} from '@mui/material'
import {usePopupState, bindTrigger, bindMenu} from 'material-ui-popup-state/hooks'
import ThreeDots from '@assets/icons/three-dots.svg'
import {useActions, useCategoriesIcons, useLocalization} from 'hooks'

interface Props {
  amount: number,
  category: string,
  comment?: string,
  date: string,
  icon: string,
  id: number,
  onEdit: (id: number) => void,
}

export const Spending: FC<Props> = memo(({
  amount,
  category,
  comment,
  date,
  icon,
  id,
  onEdit,
}) => {
  const getIcon = useCategoriesIcons()
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  const {localization} = useLocalization()
  const {deleteSpending: deleteSpendingAction} = useActions()

  const deleteSpending = () => {
    deleteSpendingAction(id)
    popupState.close()
  }

  const editSpending = () => {
    onEdit(id)
    popupState.close()
  }

  return (
    <article className="spending">
      <div className="spending__options">
        <ThreeDots className="spending__options-icon" {...bindTrigger(popupState)} />
        <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={editSpending}>{localization.edit}</MenuItem>
          <MenuItem onClick={deleteSpending}>{localization.delete}</MenuItem>
        </Menu>
      </div>

      <div className="spending__row spending__row--space-between">
        <div className="spending__col">
          <div className="spending__image">
            {getIcon(icon)}
          </div>

          <div className="spending__data">
            <h2 className="spending__data-text spending__data-text--bold">{category}</h2>
            <span className="spending__data-text">{comment ?? ''}</span>
          </div>
        </div>

        <div className="spending__col">
          <div className="spending__data">
            <span className="spending__data-text spending__data-text--price">{amount}</span>
            <span className="spending__data-text">{date}</span>
          </div>
        </div>
      </div>
    </article>
  )
})

Spending.displayName = 'Spending'