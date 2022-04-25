import type {FC, MouseEventHandler} from 'react'
import type {RootState} from 'store/reducers'
import type {Category} from 'model'
import {useSelector} from 'react-redux'
import {Category as CategoryComponent} from 'components'
import {useLocalization} from 'hooks'
import {APP_LANG} from 'utils'

interface Props {
  onSelectCategory: (categoryId: string) => void,
  selectedCategory?: number,
}

export const CategoriesList: FC<Props> = ({onSelectCategory, selectedCategory}) => {
  const {categories} = useSelector((state: RootState) => state.categories)
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