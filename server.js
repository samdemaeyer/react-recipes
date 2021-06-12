const app = require('express')()
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema } = require('graphql')
const { RootQueryType } = require('./graphql-types')

const schema = new GraphQLSchema({
  query: RootQueryType,
})

app.use('/graphql', graphqlHTTP({ graphiql: true, schema }))

app.listen(5000, () => {})
