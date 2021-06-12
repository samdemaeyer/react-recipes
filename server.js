const app = require('express')()
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema } = require('graphql')
const { RootQueryType, RootMutuaionType } = require('./graphql-types')

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutuaionType,
})

app.use('/graphql', graphqlHTTP({ graphiql: true, schema }))

app.listen(5000, () => {})
