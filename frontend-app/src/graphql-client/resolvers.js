// Not doing anything with the server. This resolver.js file is to define schema for local client.
import { gql } from 'apollo-boost';

import {
  addItemToCart,
  decrementItemFromCart,
  getCartItemQuantity,
  getCartTotalPrice,
  deleteEntireItem,
} from './cart_util';

// Type definition (typeDefs) of Mutation defined below (for graphQL)
// "extend": Checks if GraphQL server has the type. If not, will define the new type following.
export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
    DecrementItemFromCart(item: Item!): [Item]!
    DeleteEntireItem(item: Item!): [Item]!
  }
`;

// Read from cache value
// Adding @client: This tells GraphQL to make query from client(cache) and not from the GraphQL server.
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const GET_CART_TOTAL_PRICE = gql`
  {
    cartTotalPrice @client
  }
`;

const updateCartItemsBasedQueries = (cache, newCartItems) => {
  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: {
      cartItems: newCartItems,
    },
  });

  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: {
      itemCount: getCartItemQuantity(newCartItems),
    },
  });

  cache.writeQuery({
    query: GET_CART_TOTAL_PRICE,
    data: {
      cartTotalPrice: getCartTotalPrice(newCartItems),
    },
  });
};

// Actual mutation definition for our javascript
export const resolvers = {
  Mutation: {
    toggleCartHidden: async (_root, _args, _context, _info) => {
      try {
        const { cache } = _context;
        const data = await cache.readQuery({
          query: GET_CART_HIDDEN,
        });

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

    addItemToCart: (_root, _args, _context, _info) => {
      const { item } = _args;
      const { cache } = _context;

      const data = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = addItemToCart(data.cartItems, item);

      updateCartItemsBasedQueries(cache, newCartItems);

      return newCartItems;
    },

    decrementItemFromCart: (_root, _args, { cache }, _info) => {
      const { item } = _args;

      const data = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = decrementItemFromCart(data.cartItems, item);

      updateCartItemsBasedQueries(cache, newCartItems);

      return newCartItems;
    },

    deleteEntireItem: (_root, _args, { cache }) => {
      const { item } = _args;

      const data = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = deleteEntireItem(data.cartItems, item);

      updateCartItemsBasedQueries(cache, newCartItems);

      return newCartItems;
    },
  },
};
