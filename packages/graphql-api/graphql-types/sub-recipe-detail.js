const { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } = require('graphql')

const SubRecipeDetailType = new GraphQLObjectType({
  name: 'SubRecipeDetail',
  description: 'This is a subRecipeDetail',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
    ingredients: {
      type: GraphQLList(GraphQLString),
    },
  }),
})

module.exports = {
  SubRecipeDetailType,
}
