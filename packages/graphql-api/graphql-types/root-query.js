const { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString } = require('graphql')
const { RecipeType } = require('./recipe')
const { recipes } = require('../db')

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    recipe: {
      type: RecipeType,
      description: 'A single recipe',
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => recipes.find(({ id }) => id === args.id),
    },
    recipes: {
      type: new GraphQLList(RecipeType),
      description: 'A collection of recipes',
      args: {
        filter: { type: GraphQLString },
        search: { type: GraphQLString }
      },
      resolve: (_, { filter, search }) => {
        // @TODO: Refacotr this properly 😅
        const [filterAttr, filterValue] = filter?.replace(']', '').split('[') || []
        if (filterValue) {
          return recipes.filter(r => r[filterAttr] === filterValue)
        } else if (search) {
          return recipes.filter(r => r.title.includes(search))
        }
        return recipes
      },
    },
  }),
})

module.exports = {
  RootQueryType,
}
