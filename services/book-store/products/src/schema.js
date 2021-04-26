const { gql } = require('apollo-server')


const typeDefs = gql`
  extend type Product @key(fields: "id"){
    id: ID! @external    
    images(size: Int = 1000): [String]
    primaryImage(size: Int = 1000): String
  }

  extend type Query {        
    product(id: ID!): Product
  }

`;

module.exports = typeDefs
