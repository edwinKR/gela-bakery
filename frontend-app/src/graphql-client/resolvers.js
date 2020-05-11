// Not doing anything with the server. This resolver.js file is to define schema for local client.
import { gql } from 'apollo-boost';

// Type definition (typeDefs) of Mutation defined below (for graphQL)
// "extend": Checks if GraphQL server has the type. If not, will define the new type following.
export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`;

// Read from cache value
// Adding @client: This tells GraphQL to make query from client(cache) and not from the GraphQL server.
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

// Actual mutation definition for our javascript
export const resolvers = {
  Mutation: {
    toggleCartHidden: async (_root, _args, _context, _info) => {
      try {
        const { cache } = _context;
        console.log('cache>>>>>', _context);
        const data = await cache.readQuery({
          query: GET_CART_HIDDEN,
        });
        console.log(data);
        // Update our cache
        await cache.writeQuery({
          query: GET_CART_HIDDEN,
          data: {
            cartHidden: !data.cartHidden,
          },
        });

        return !data.cartHidden;
      } catch (error) {
        console.log('toggleCartHidden GraphQL Error: ', error);
      }
    },
  },
};
