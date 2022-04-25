import {useCallback, useState, ChangeEvent, useMemo} from 'react'
import {ButtonUnstyled} from '@mui/material'
import {useLocalization} from 'hooks'
import {DatePicker, Calculator, Input, CategoriesList} from 'components'

interface SpendingState {
  amount: string,
  description: string,
  date: string,
  categoryId?: number,
}

export const CreateSpendingForm = () => {
  const {localization, lang} = useLocalization()
  const [spending, setSpending] = useState<SpendingState>({
    amount: '0',
    description: '',
    date: new Date().toISOString(),
    categoryId: undefined,
  })

  const handleChange = useCallback((value: string, name: string) => {
    setSpending(prev => ({...prev, [name]: value}))
  }, [])

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSpending(prev => ({...prev, [event.target.name]: event.target.value}))
  }, [])

  const handleSelectCategory = useCallback((category: string) => {
    const categoryId = parseInt(category)

    if (!isNaN(+categoryId)) {
      setSpending(prev => ({...prev, categoryId}))
    }
  }, [])

  const canSubmit = useMemo(() => parseFloat(spending.amount) && spending.categoryId, [spending.amount, spending.categoryId])

  return (
    <form className="create-spending-form">
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
        <DatePicker value={spending.date} name="date" setValue={handleChange} lang={lang} />
        <div className="create-spending-form__categories">
          <CategoriesList selectedCategory={spending.categoryId} onSelectCategory={handleSelectCategory} />
        </div>
      </div>
    </form>
  )
}