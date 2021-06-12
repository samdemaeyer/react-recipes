const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql')
const { recipes } = require('../db')
const { RecipeType } = require('./recipe')

const RootMutuaionType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addRecipe: {
      type: RecipeType,
      description: 'Add a recipe',
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, args) => {
        const recipe = {
          id: recipes.length + 1,
          ...args,
        }
        recipes.push(recipe)
        return recipe
      },
    },
  }),
})

module.exports = {
  RootMutuaionType,
}
