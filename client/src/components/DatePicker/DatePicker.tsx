import {memo, FC} from 'react'
import {DatePicker as DatePickerMUI, LocalizationProvider} from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import {TextField, TextFieldProps} from '@mui/material'
import ruLocale from 'date-fns/locale/ru'
import enLocale from 'date-fns/locale/en-US'
import {APP_LANG} from 'utils'

interface Props {
  value: string,
  name: string,
  setValue: (value: string, name: string) => void,
  lang: APP_LANG
}

const localeMap = {
  EN: enLocale,
  RU: ruLocale,
}

const maskMap = {
  EN: '__/__/____',
  RU: '__.__.____',
}

export const DatePicker: FC<Props> = memo(({value, setValue, lang, name}) => {
  const handleChange = (value: string | null) => {
    const date = value ?? new Date().toISOString() // TODO: fix date

    setValue(date, name)
  }

  const renderInput = ({error, ...params}: TextFieldProps) => {
    return (
      <TextField className="datepicker" error={false} name={name} {...params} />
    )
  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={localeMap[lang]}>
      <DatePickerMUI
        mask={maskMap[lang]}
        value={value}
        onChange={handleChange}
        renderInput={renderInput}
      />
    </LocalizationProvider>
  )
})

DatePicker.displayName = 'DatePicker'