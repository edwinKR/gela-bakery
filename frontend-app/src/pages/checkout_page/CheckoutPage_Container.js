import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CheckoutPage from './CheckoutPage';

const GET_CART_ITEMS_AND_TOTAL_PRICE = gql`
  {
    cartItems @client
    cartTotalPrice @client
  }
`;

const CheckoutPage_Container = () => {
  return (
    <Query query={GET_CART_ITEMS_AND_TOTAL_PRICE}>
      {(queryProps) => {
        console.log(queryProps);

        const { cartItems, cartTotalPrice } = queryProps.data;
        return <CheckoutPage cartItems={cartItems} totalPrice={cartTotalPrice} />;
      }}
    </Query>
  );
};

export default CheckoutPage_Container;
