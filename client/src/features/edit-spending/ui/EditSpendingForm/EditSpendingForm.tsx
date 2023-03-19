import type {CategoryReducer} from '_entities'
import {ChangeEvent, FC, useCallback, useMemo, useState} from 'react'
import {useSelector} from 'react-redux'
import {ButtonUnstyled} from '@mui/material'
import {APP_LANG, useLocalization, DatePicker, Input, Select, isEqual} from 'shared'
import {useActions} from '../../lib'

interface Props {
  amount: string,
  categoryId: number,
  date: string,
  description: string,
  id: number,
  onSubmit: () => void,
}

export const EditSpendingForm: FC<Props> = ({
  amount,
  categoryId,
  date,
  description,
  id,
  onSubmit,
}) => {
  const maxDate = useMemo(() => new Date(), [])
  const {lang, localization} = useLocalization()
  const {editSpending} = useActions()
  const categoriesValues = useSelector((state: CategoryReducer) => {
    return (state.categories.categories ?? []).map(
      category => ({
        name: category[lang === APP_LANG.RU ? 'titleRus' : 'titleEng'],
        value: category.id,
      })
    )
  })
  const [spending, setSpending] = useState({
    amount,
    description,
    date,
    categoryId,
  })

  const handleChange = useCallback((value: string | number, name: string) => {
    setSpending(prev => ({...prev, [name]: value}))
  }, [])

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSpending(prev => ({...prev, [event.target.name]: event.target.value}))
  }, [])

  const isFormPristine = () => {
    const startValue = {
      amount,
      categoryId,
      date,
      description
    }

    return isEqual(startValue, spending)
  }

  const handleSubmit = () => {
    onSubmit()
    editSpending({
      ...spending,
      amount: parseFloat((spending.amount ?? 0)),
      id,
    })
  }

  return (
    <form className="edit-spending-form" onSubmit={handleSubmit}>
      <div className="edit-spending-form__container">
        <div className="edit-spending-form__inputs">
          <Input
            value={spending.amount}
            onChange={handleInputChange}
            label={localization.amount}
            type="number"
            name="amount"
            placeholder={localization.amount}
            className="edit-spending-form__input expenses__input"
          />
          <Input
            value={spending.description}
            onChange={handleInputChange}
            label={localization.comment}
            name="description"
            placeholder={localization.comment}
            className="edit-spending-form__input expenses__input"
          />
          <label className="edit-spending-form__label">
            <span className="edit-spending-form__label-text">{localization.date}</span>
            <DatePicker value={spending.date} name="date" setValue={handleChange} lang={lang} maxDate={maxDate} />
          </label>
          <Select
            label={localization.category}
            id="category-select"
            name="categoryId"
            value={spending.categoryId}
            values={categoriesValues}
            onChange={handleChange}
          />
        </div>
        <ButtonUnstyled
          disabled={isFormPristine()}
          className="edit-spending-form__button button button--light button--uppercase"
          type="submit"
        >
          {localization.edit}
        </ButtonUnstyled>
      </div>
    </form>
  )
}