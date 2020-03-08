import React from 'react';
import { connect } from 'react-redux';

import ButtonComponent from '../button_component/ButtonComponent';
import CartItem from '../cart_item_component/cart_item';

import './cart_dropdown.styles.scss';

const CartDropdown = props => {
  const { cartItems } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(singleCartItem => {
          return <CartItem key={singleCartItem.id} singleCartItem={singleCartItem} />;
        })}
      </div>
      <ButtonComponent>CHECKOUT</ButtonComponent>
    </div>
  );
};

const mapStateToProps = state => {
  const { cartItems } = state.cart;
  return { cartItems };
};

export default connect(mapStateToProps)(CartDropdown);
