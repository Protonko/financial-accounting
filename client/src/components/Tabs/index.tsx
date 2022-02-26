import {Tabs as TabsMui, Tab} from '@mui/material'

export interface Tab {
  label: string,
  value: string
}

export interface Props<T extends string> {
  setValue: (value: T) => void,
  tabs: Tab[]
  value: T,
}

export const Tabs = <T extends string>({setValue, tabs, value}: Props<T>) => {
  return (
    <TabsMui
      className="tabs"
      value={value}
      onChange={(_event, value) => setValue(value)}
      textColor="inherit"
      TabIndicatorProps={{className: 'tabs__indicator'}}
    >
      {tabs.map(tab => <Tab className="tabs__button" key={tab.value + tab.label} {...tab} />)}
    </TabsMui>
  )
}