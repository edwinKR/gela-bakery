import React from 'react';
import flowRight from 'lodash.flowright';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import CheckoutItemComponent from './CheckoutItemComponent';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const DECREMENT_ITEM_FROM_CART = gql`
  mutation DecrementItemFromCart($item: Item!) {
    decrementItemFromCart(item: $item) @client
  }
`;

const DELETE_ENTIRE_ITEM = gql`
  mutation DeleteEntireItem($item: Item!) {
    deleteEntireItem(item: $item) @client
  }
`;

const CheckoutItemComponent_Container = ({
  addItemToCart,
  decrementItemFromCart,
  deleteEntireItem,
  ...otherProps
}) => {
  return (
    <CheckoutItemComponent
      {...otherProps}
      addItem={(item) => addItemToCart({ variables: { item } })}
      decrementItem={(item) => decrementItemFromCart({ variables: { item } })}
      deleteEntireItem={(item) => deleteEntireItem({ variables: { item } })}
    />
  );
};

export default flowRight(
  graphql(ADD_ITEM_TO_CART, { name: 'addItemToCart' }),
  graphql(DECREMENT_ITEM_FROM_CART, { name: 'decrementItemFromCart' }),
  graphql(DELETE_ENTIRE_ITEM, { name: 'deleteEntireItem' }),
)(CheckoutItemComponent_Container);
