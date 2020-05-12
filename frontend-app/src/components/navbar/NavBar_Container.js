import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import NavBar from './NavBar';

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const NavBar_Container = () => {
  return (
    <Query query={GET_CART_HIDDEN}>
      {(props) => {
        const { cartHidden } = props.data;
        return <NavBar hidden={cartHidden} />;
      }}
    </Query>
  );
};

export default NavBar_Container;
