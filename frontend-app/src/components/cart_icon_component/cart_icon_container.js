import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartIcon from './cart_icon';
// import { toggleCartHidden } from '../../redux/cart/cart_action';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartIconContainer = () => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {(toggleCartHidden) => {
        return <CartIcon toggleCartHidden={toggleCartHidden} />;
      }}
    </Mutation>
  );
};

export default CartIconContainer;
