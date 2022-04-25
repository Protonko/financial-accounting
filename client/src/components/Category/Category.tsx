import {memo, FC} from 'react'
import classNames from 'classnames'
import {useCategoriesIcons} from 'hooks'

interface Props {
  id: string,
  type: string,
  title: string
  isSelectedCategory: boolean,
}

export const Category: FC<Props> = memo(({id, type, title, isSelectedCategory}) => {
  const getIcon = useCategoriesIcons()
  const categoryClassNames = classNames('category', {'category--selected': isSelectedCategory})

  return (
    <div className={categoryClassNames} id={id}>
      <span className="category__icon">
        {getIcon(type)}
      </span>
      <span className="category__title">
        {title}
      </span>
    </div>
  )
})

Category.displayName = 'Category'