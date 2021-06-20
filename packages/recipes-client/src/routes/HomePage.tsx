import { gql, useQuery } from '@apollo/client'
import type { Recipe } from '../components/RecipeCard'
import { useHistory } from 'react-router-dom'
import { RecipeCard } from '../components/RecipeCard'
import { CategoryLink } from '../components/CategoryLink'
import { FC, ChangeEvent, useState } from 'react'
import type { RouteComponentProps } from 'react-router'
import type { Categories } from '../components/CategoryLink'

const RECIPES = ({ selectedCategory, search }: { selectedCategory: Categories; search: string | null }) => {
  const recipeAttrs = `
    id
    title
    image
    description
  `
  if (selectedCategory) {
    return gql(`
      {
        recipes(filter: "category[${selectedCategory}]") {
          ${recipeAttrs}
        }
      }`)
  }
  if (search) {
    return gql(`
      {
        recipes(search: "${search}") {
          ${recipeAttrs}
        }
      }`)
  }
  return gql`
    {
      recipes {
        ${recipeAttrs}
      }
    }
  `
}

const HomePage: FC<RouteComponentProps> = (props) => {
  const params = new URLSearchParams(props.location.search)
  const selectedCategory = params.get('category') as Categories
  const searchParam = params.get('search')
  const { loading, error, data } = useQuery(RECIPES({ selectedCategory, search: searchParam }))
  const history = useHistory()
  const [search, setSearch] = useState(params.get('search') || '')

  // @TODO: implement debouncer
  const searchRecipe = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(window.location.search)
    value ? params.set('search', value) : params.delete('search')
    setSearch(value)
    history.push({ search: params.toString() })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <p className="text-center mb-4 content-container">
        Browse all the recipes here, select a category or search for an ingredient.
      </p>

      <div className="row mb-4 text-center">
        <div className="col">
          <CategoryLink category="speedy" selectedCategory={selectedCategory} />
        </div>
        <div className="col">
          <CategoryLink category="slow" selectedCategory={selectedCategory} />
        </div>
        <div className="col">
          <CategoryLink category="side" selectedCategory={selectedCategory} />
        </div>
        <div className="col">
          <CategoryLink category="small" selectedCategory={selectedCategory} />
        </div>
        <div className="col">
          <CategoryLink category="sweet" selectedCategory={selectedCategory} />
        </div>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search recipes"
              onInput={searchRecipe}
              value={search}
            />
          </div>
        </form>
      </div>
      <div className="row">
        {data.recipes.map((recipe: Recipe, i: string) => (
          <RecipeCard recipe={recipe} key={i} />
        ))}
      </div>
    </>
  )
}

export { HomePage }
