import {useCallback, useState, ChangeEvent} from 'react'
import {useLocalization} from 'hooks'
import {DatePicker, Calculator, Input} from 'components'

interface SpendingState {
  amount: string,
  comment: string,
  date: string,
}

export const CreateSpendingForm = () => {
  const {lang, getLocalizedValue} = useLocalization()
  const [spending, setSpending] = useState<SpendingState>({
    amount: '0',
    comment: '',
    date: new Date().toISOString(),
  })

  const handleChange = useCallback((value: string, name: string) => {
    setSpending(prev => ({...prev, [name]: value}))
  }, [])

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSpending(prev => ({...prev, [event.target.name]: event.target.value}))
  }, [])

  return (
    <form className="create-spending-form">
      <div className="create-spending-form__col create-spending-form__col--sm">
        <Calculator displayValue={spending.amount} name="amount" setDisplayValue={handleChange} />
      </div>
      <div className="create-spending-form__col create-spending-form__col--lg">
        <Input
          value={spending.comment}
          onChange={handleInputChange}
          label=""
          name="comment"
          placeholder={getLocalizedValue('comment')}
          className="expenses__input"
        />
        <DatePicker value={spending.date} name="date" setValue={handleChange} lang={lang} />
        <div className="create-spending-form__categories">
          Categories
        </div>
      </div>
    </form>
  )
}