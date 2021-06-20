import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export type Recipe = {
  id: string
  image: string
  title: string
  description: string
}

type RecipeCardProps = {
  recipe: Recipe
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  const { id, image, title, description } = recipe

  return (
    <div className="col-sm-6 col-lg-4 mb-4 d-flex">
      <div className="card">
        <Link to={`/react-recipes/recipe/${id}`}>
          <img src={image} className="card-img-top" alt={title} />
        </Link>
        <div className="card-body">
          <Link to={`/react-recipes/recipe/${id}`} className="h5 text-uppercase">
            {title}
          </Link>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

export { RecipeCard }
