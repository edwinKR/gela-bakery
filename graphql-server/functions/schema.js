// Graphql Schema
const typeDefs = gql`
  type Category {
    id: ID!
    title: String!
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
