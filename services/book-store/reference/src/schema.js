const { gql } = require('apollo-server')


const typeDefs = gql`
  enum ProductCategory {
    ALL
    GIFT_CARDS
    ELECTRONICS
    CAMERA_N_PHOTO
    VIDEO_GAMES
    BOOKS
    CLOTHING
  }
    
  enum CURRENCY_CODE {
    USD
  }

  type Department {
    category: ProductCategory
    url: String
  }

  type Money {
    amount: Float
    currencyCode: CURRENCY_CODE
  }

  type Price {
    cost: Money
    deal: Float
    dealSavings: Money
  }

  # federated
  type Product @key(fields: "id") {

    id: ID!
    title: String
    url: String
    description: String
    price: Price    
    # salesRank(category: ProductCategory = ALL): Int
    salesRankOverall: Int
    salesRankInCategory: Int
    # category: ProductCategory
  }

`;

module.exports = typeDefs
