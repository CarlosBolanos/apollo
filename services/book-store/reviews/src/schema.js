const { gql } = require('apollo-server')

const typeDefs = gql`
  extend type Product @key(fields: "id") {
    id: ID! @external
    reviews: [Review]
    reviewSummary: ReviewSummary
  }

  type Review {
    id: ID!
    rating: Float
    content: String
  }

  type ReviewSummary {
    totalReviews: Int
    averageRating: Float
  }

  extend type Query {
    reviews: [Review]
  }
`;

module.exports = typeDefs
