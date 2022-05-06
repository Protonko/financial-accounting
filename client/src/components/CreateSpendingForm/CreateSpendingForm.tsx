import type {RootState} from '@store/reducers'
import {useCallback, useState, ChangeEvent, useMemo, FormEventHandler} from 'react'
import {useSelector} from 'react-redux'
import {ButtonUnstyled} from '@mui/material'
import {getLocalDate} from 'utils'
import {ICONS_MAP, useActions, useLocalization} from 'hooks'
import {DatePicker, Calculator, Input, CategoriesList} from 'components'

interface SpendingState {
  amount: string,
  description: string,
  date: string,
  category?: number,
}

const initialState: SpendingState = {
  amount: '0',
  description: '',
  date: getLocalDate(new Date()),
  category: undefined,
}

export const CreateSpendingForm = () => {
  const {localization, lang} = useLocalization()
  const {createSpending} = useActions()
  const {categories} = useSelector((state: RootState) => state.categories)
  const [spending, setSpending] = useState<SpendingState>(initialState)
  const maxDate = useMemo(() => new Date(), [])

  const handleChange = useCallback((value: string, name: string) => {
    setSpending(prev => ({...prev, [name]: value}))
  }, [])

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSpending(prev => ({...prev, [event.target.name]: event.target.value}))
  }, [])

  const handleSelectCategory = useCallback((categoryId: string) => {
    const category = parseInt(categoryId)

    if (!isNaN(+categoryId)) {
      setSpending(prev => ({...prev, category}))
    }
  }, [])

  const canSubmit = useMemo(() => {
    const categoryType = categories?.find(category => category.id === spending.category)?.type
    return parseFloat(spending.amount) && categoryType && ICONS_MAP.has(categoryType)
  }, [categories, spending.amount, spending.category])

  const handleSubmit: FormEventHandler = event => {
    event.preventDefault()

    if (canSubmit) {
      createSpending({
        ...spending,
        amount: parseFloat(spending.amount),
        categoryId: spending.category!,
      })
      setSpending(initialState)
    }
  }

  return (
    <form className="create-spending-form" onSubmit={handleSubmit}>
      <div className="create-spending-form__col create-spending-form__col--sm">
        <Calculator displayValue={spending.amount} name="amount" setDisplayValue={handleChange} />

        <ButtonUnstyled
          className="create-spending-form__button button button--light button--uppercase"
          type="submit"
          disabled={!canSubmit}
        >
          {localization.create}
        </ButtonUnstyled>
      </div>
      <div className="create-spending-form__col create-spending-form__col--lg">
        <Input
          value={spending.description}
          onChange={handleInputChange}
          label=""
          name="description"
          placeholder={localization.comment}
          className="expenses__input"
        />
        <DatePicker value={spending.date} name="date" setValue={handleChange} lang={lang} maxDate={maxDate} />
        <div className="create-spending-form__categories">
          <CategoriesList selectedCategory={spending.category} onSelectCategory={handleSelectCategory} />
        </div>
      </div>
    </form>
  )
}