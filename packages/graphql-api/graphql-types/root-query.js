const { GraphQLObjectType, GraphQLInt, GraphQLList } = require('graphql')
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
      resolve: () => recipes,
    },
  }),
})

module.exports = {
  RootQueryType,
}
