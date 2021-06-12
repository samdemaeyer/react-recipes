const { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } = require('graphql')
const { SubRecipeDetailType } = require('./sub-recipe-detail')
const { subRecipeDetails } = require('../db')

const RecipeDetailType = new GraphQLObjectType({
  name: 'RecipeDetail',
  description: 'This is a recipeDetail',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    serves: {
      type: GraphQLNonNull(GraphQLString),
    },
    image: {
      type: GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
    },
    preparationSteps: {
      type: GraphQLList(GraphQLString),
    },
    ingredients: {
      type: GraphQLList(GraphQLString),
    },
    subRecipeDetailId: {
      type: GraphQLNonNull(GraphQLInt),
    },
    subRecipeDetail: {
      type: SubRecipeDetailType,
      resolve: ({ subRecipeDetailId }) => subRecipeDetails.find(({ id }) => id === subRecipeDetailId),
    },
  }),
})

module.exports = { RecipeDetailType }
