import type {VFC} from 'react'
import {FormControlLabel} from '@mui/material'
import {DatePicker} from 'components'
import {useLocalization} from 'hooks'

interface Props {
  startDate: string
  endDate: string
}

export const ReportFilters: VFC<Props> = ({ startDate, endDate }) => {
  const {lang, localization} = useLocalization()

  return (
    <div className="report-filters">
      <FormControlLabel
        className="report-filters__label"
        labelPlacement="top"
        label={localization.startDate}
        control={<DatePicker value={startDate} setValue={() => {}} lang={lang} name="startDate" />}
      />
      <FormControlLabel
        className="report-filters__label"
        labelPlacement="top"
        label={localization.endDate}
        control={<DatePicker value={endDate} setValue={() => {}} lang={lang} name="endDate" />}
      />
    </div>
  )
}