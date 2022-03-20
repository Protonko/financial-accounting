import type {FC} from 'react'
import {DatePicker as DatePickerMUI, LocalizationProvider} from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import {TextField, TextFieldProps} from '@mui/material'
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US'
import {APP_LANG} from '@utils/localization/localization'

interface Props {
  value: string,
  setValue: (value: string | null) => void,
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

export const DatePicker: FC<Props> = ({value, setValue, lang}) => {
  const renderInput = ({error, ...params}: TextFieldProps) => {
    return (
      <TextField className="datepicker" error={false} {...params} />
    )
  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={localeMap[lang]}>
      <DatePickerMUI
        mask={maskMap[lang]}
        value={value}
        onChange={setValue}
        renderInput={renderInput}
      />
    </LocalizationProvider>
  )
}