import {useEffect, useRef, ReactNode, ElementType} from 'react'
import classNames from 'classnames'
import {CircularProgress} from '@mui/material'
import {genericMemo} from '../../lib'

interface Section<T> {
  title: string,
  data: T[],
}

interface Props<T> {
  className?: string,
  keyExtractor: (item: T, index: number) => string,
  loading: boolean,
  renderSectionHeader: (title: Section<T>) => ReactNode,
  renderItem: (value: T, index: number, array: T[]) => ReactNode,
  sections: Section<T>[],
  ListEmptyComponent: ElementType,
  onEndReached: () => void,
  shouldLoadData: boolean,
}

export const SectionList = genericMemo(<T,>({
  className,
  keyExtractor,
  loading,
  sections,
  renderItem,
  renderSectionHeader,
  ListEmptyComponent,
  onEndReached,
  shouldLoadData
}: Props<T>) => {
  const sectionListClassNames = classNames('section-list', {[className ?? '']: !!className})
  const scrollIndicator = useRef<HTMLDivElement>(null)

  const handleEndReached = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      onEndReached()
    }
  }

  const observer = useRef(new IntersectionObserver(handleEndReached))

  const createObserver = () => {
    if (scrollIndicator.current) {
      observer.current.observe(scrollIndicator.current)
    }
  }

  useEffect(() => {
    createObserver()

    return () => observer.current.disconnect()
  }, [])

  const renderSectionItem = (value: T, index: number, array: T[]) => {
    return (
      <li className="section-list__item" key={keyExtractor(value, index)}>
        {renderItem(value, index, array)}
      </li>
    )
  }

  const renderSection = (data: Section<T>) => {
    if (data.data.length) {
      return (
        <li className="section-list__section-item" key={data.title}>
          <div className="section-list__section-item-header">
            {renderSectionHeader(data)}
          </div>
          <div className="section-list__section-item-data">
            <ul className="section-list__items list list--reset">
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
      return (
        <div className="section-list__loader">
          <CircularProgress color="inherit" />
        </div>
      )
    } else if (shouldLoadData) {
      return <div ref={scrollIndicator} />
    } else {
      return null
    }
  }

  if (sections.length) {
    return (
      <div className={sectionListClassNames}>
        <ul className="section-list__sections list list--reset">
          {sections.map(renderSection)}
        </ul>

        {renderLoader()}
      </div>
    )
  }

  return <ListEmptyComponent />
})