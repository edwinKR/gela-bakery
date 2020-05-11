import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './cart_dropdown';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdown_Container = () => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {(toggleCartHidden) => {
        return (
          <Query query={GET_CART_ITEMS}>
            {(props) => {
              const {
                data: { cartItems },
              } = props;

              return <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />;
            }}
          </Query>
        );
      }}
    </Mutation>
  );
};

export default CartDropdown_Container;
