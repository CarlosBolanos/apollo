const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');
const { buildFederatedSchema } = require('@apollo/federation');
const { readFileSync } = require('fs');
const path = require('path');

const supergraphSchema = readFileSync(path.join(__dirname, 'supergraph.graphql')).toString();

const gateway = new  ApolloGateway({  
  supergraphSdl: supergraphSchema
})

const server = new ApolloServer({
  gateway, 
  subscriptions: false, 
  // schema: buildFederatedSchema(
  //   [ 
  //     { typeDefs }, 
  //     // { typeDefs: productsTypeDefs, resolvers: productsResolvers },
  //     // { typeDefs: reviewsTypeDefs, resolvers: reviewsResolvers }
  //   ]
  // )  
});

server.listen({
  port: process.env.PORT || 4000,
}).then(({ url }) => {
  console.log(`🚀 federated gateway Server ready at ${url}`);
})
