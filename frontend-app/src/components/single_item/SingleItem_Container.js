import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import SingleItem from './SingleItem';

const ADD_ITEM_TO_CART = gql`
  mutation addItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const SingleItem_Container = (props) => {
  return (
    <Mutation mutation={ADD_ITEM_TO_CART}>
      {(addItemToCart) => {
        return <SingleItem {...props} addItem={(item) => addItemToCart({ variables: { item } })} />;
      }}
    </Mutation>
  );
};

export default SingleItem_Container;
