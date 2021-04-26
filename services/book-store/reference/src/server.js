const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const { buildFederatedSchema } = require('@apollo/federation');


const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

server.listen({
  port: process.env.PORT || 4002,
}).then(({ url }) => {
  console.log(`🚀  reference Server ready at ${url}`);
})
