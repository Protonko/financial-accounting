import type {FC, MouseEventHandler} from 'react'
import type {Category, CategoryReducer} from '../../model'
import {useSelector} from 'react-redux'
import {CategoryComponent} from '../Category'
import {useLocalization, APP_LANG} from 'shared'

interface Props {
  onSelectCategory: (categoryId: string) => void,
  selectedCategory?: number,
}

export const CategoriesList: FC<Props> = ({onSelectCategory, selectedCategory}) => {
  const {categories} = useSelector((state: CategoryReducer) => state.categories)
  const {lang} = useLocalization()

  const selectCategory: MouseEventHandler<HTMLUListElement> = event => {
    const id = (event.target as HTMLUListElement).closest('.category')?.id

    if (id) {
      onSelectCategory(id.replace(CategoriesList.name, ''))
    }
  }

  const renderCategory = (category: Category) => {
    const componentId = `${CategoriesList.name}${category.id}`

    return (
      <li className="categories-list__item" key={category.id}>
        <CategoryComponent
          type={category.type}
          title={lang === APP_LANG.RU ? category.titleRus : category.titleEng}
          id={componentId}
          isSelectedCategory={selectedCategory === category.id}
        />
      </li>
    )
  }

  if (categories) {
    return (
      <ul className="categories-list list list--reset" onClick={selectCategory}>
        {categories.map(renderCategory)}
      </ul>
    )
  }

  return null
}