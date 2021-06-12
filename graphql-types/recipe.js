const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql')
const { RecipeDetailType } = require('./recipe-detail')
const { recipeDetails } = require('../db')

const RecipeType = new GraphQLObjectType({
  name: 'Recipe',
  description: 'This is a recipe',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    recipeDetailId: {
      type: GraphQLNonNull(GraphQLInt),
    },
    category: {
      type: GraphQLNonNull(GraphQLString),
    },
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
    isFavourite: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    rating: {
      type: GraphQLNonNull(GraphQLInt),
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
    },
    image: {
      type: GraphQLNonNull(GraphQLString),
    },
    recipeDetail: {
      type: RecipeDetailType,
      resolve: (recipe) => recipeDetails.find(({ id }) => id === recipe.id),
    },
  }),
})

module.exports = { RecipeType }
