const { gql } = require('apollo-server-cloud-functions');

// Graphql Schema
// type <Object>: Like an ORM, each object type represents an object that an application client might need to interact with.
// type Query: Clients won't have a way to fetch to the objects that exist in the data graph defined via object types. This is where the Query types come in. Clients can execute against the data graph based on the defined query types.
//
const typeDefs = gql`
  type Category {
    id: ID!
    category: String!
    items: [Item!]!
  }

  type Item {
    id: ID!
    name: String!
    price: Float!
    imageUrl: String!
    category: Category
  }

  type Query {
    categories: [Category!]!
    category(id: ID!): Category
    getCategoriesByName(name: String): Category
  }
`;

module.exports = typeDefs;
