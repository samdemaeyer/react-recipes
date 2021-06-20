import type { FC } from 'react'
import { Link } from 'react-router-dom'

export type Categories = 'speedy' | 'slow' | 'side' | 'small' | 'sweet'

type CategoryLinkProps = {
  category: Categories
  selectedCategory: Categories | null
}

const CategoryLink: FC<CategoryLinkProps> = ({ category, selectedCategory }): JSX.Element => {
  const isSelected = selectedCategory === category
  const params = new URLSearchParams(window.location.search)
  params.set('category', category)

  return (
    <Link
      to={{ search: params.toString() }}
      className={`h6 mb-1 category-link text-uppercase ${isSelected ? 'border-secondary' : ''}`}
    >
      {category}
    </Link>
  )
}

export { CategoryLink }
