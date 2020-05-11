import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartIcon from './cart_icon';
// import { toggleCartHidden } from '../../redux/cart/cart_action';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = () => {
  return (
    <Query query={GET_ITEM_COUNT}>
      {(queryProps) => {
        const {
          data: { itemCount },
        } = queryProps;

        return (
          <Mutation mutation={TOGGLE_CART_HIDDEN}>
            {(toggleCartHidden) => {
              return <CartIcon toggleCartHidden={toggleCartHidden} totalCartItems={itemCount} />;
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default CartIconContainer;
