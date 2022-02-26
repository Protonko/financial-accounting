import {useState} from 'react';
import {useRouter} from 'next/router';
import {Tab, Tabs} from 'components';
import {useLocalization} from 'hooks';
import {HeaderPathMapper, TABS} from './utils';

export const HeaderTabs = () => {
  const {pathname, push} = useRouter()
  const {getLocalizedValue} = useLocalization()
  const [value] = useState(HeaderPathMapper.mapPathToTabValue(pathname))

  const tabs: Tab[] = [
    {label: getLocalizedValue('expenses'), value: TABS.EXPENSES},
    {label: getLocalizedValue('categories'), value: TABS.CATEGORIES},
    {label: getLocalizedValue('reports'), value: TABS.REPORTS},
  ]

  return (
    <Tabs tabs={tabs} value={value} setValue={push} />
  )
}