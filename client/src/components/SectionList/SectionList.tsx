import type {ReactNode, ElementType} from 'react'
import classNames from 'classnames'
import {CircularProgress} from '@mui/material'

interface Section<T> {
  title: string,
  data: T[],
}

// return Object.entries(spendingRecord).map(elem => ({
//   date: elem[0],
//   spending: elem[1],
// }))
interface Props<T> {
  className: string,
  keyExtractor: <U>(item: U, index: number) => string,
  loading: boolean,
  renderSectionHeader: (section: Section<T>) => ReactNode,
  renderItem: (value: T, index: number, array: T[]) => ReactNode,
  sections: Section<T>[],
  ListEmptyComponent: ElementType,
  onEndReached: () => void,
}

export const SectionList = <T extends any>({
  className,
  keyExtractor,
  loading,
  sections,
  renderItem,
  renderSectionHeader,
  ListEmptyComponent,
  onEndReached,
}: Props<T>) => {
  const sectionListClassNames = classNames('section-list', {[className ?? '']: !!className})

  const renderSectionItem = (value: T, index: number, array: T[]) => {
    return (
      <li className="section-list__item" key={keyExtractor(value, index)}>
        {renderItem(value, index, array)}
      </li>
    )
  }

  const renderSection = (data: Section<T>, index: number) => {
    if (data.data.length) {
      return (
        <li className="section-list__section-item" key={keyExtractor(data, index)}>
          <div className="section-list__section-item-header">
            {renderSectionHeader(data)}
          </div>
          <div className="section-list__section-item-data">
            <ul className="section-list__items">
              {data.data.map(renderSectionItem)}
            </ul>
          </div>
        </li>
      )
    }

    return null
  }

  const renderLoader = () => {
    if (loading) {
      return <CircularProgress color="inherit" />
    }

    return null
  }

  if (sections.length) {
    return (
      <div className={sectionListClassNames}>
        <ul className="section-list__sections">
          {sections.map(renderSection)}
        </ul>

        {renderLoader()}
      </div>
    )
  }

  return <ListEmptyComponent />
}