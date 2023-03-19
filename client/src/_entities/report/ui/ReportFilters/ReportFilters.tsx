import {useCallback, VFC} from 'react'
import {FormControlLabel} from '@mui/material'
import {useRouter} from 'next/router'
import {DatePicker, useLocalization} from 'shared'

interface Props {
  startDate: string
  endDate: string
}

export const ReportFilters: VFC<Props> = ({ startDate, endDate }) => {
  const {pathname, query, push} = useRouter()
  const {lang, localization} = useLocalization()

  const setValue = useCallback((value: string, name: string) => {
    if (query[name] === value) return

    push({
      pathname: pathname,
      query: { ...query, [name]: value },
    })
  }, [pathname, push, query])

  return (
    <div className="report-filters">
      <FormControlLabel
        className="report-filters__label"
        labelPlacement="top"
        label={localization.startDate}
        control={<DatePicker value={startDate} setValue={setValue} lang={lang} name="startDate" />}
      />
      <FormControlLabel
        className="report-filters__label"
        labelPlacement="top"
        label={localization.endDate}
        control={<DatePicker value={endDate} setValue={setValue} lang={lang} name="endDate" />}
      />
    </div>
  )
}
