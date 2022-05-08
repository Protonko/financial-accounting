import {FC, useState} from 'react'
import {useRouter} from 'next/router'
import {Tab, Tabs} from 'components'
import {useLocalization} from 'hooks'
import {HeaderPathMapper, TABS} from './utils'

export const HeaderTabs: FC = () => {
  const {pathname, push} = useRouter()
  const {localization} = useLocalization()
  const [value] = useState(HeaderPathMapper.mapPathToTabValue(pathname))

  const navigate = (value: string) => {
    push({pathname: '/' + value})
  }

  const tabs: Tab[] = [
    {label: localization.expenses, value: TABS.EXPENSES},
    {label: localization.reports, value: TABS.REPORTS},
  ]

  return (
    <Tabs tabs={tabs} value={value} setValue={navigate} />
  )
}