import React from 'react';

import ButtonComponent from '../button_component/ButtonComponent';

import './cart_dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <ButtonComponent>CHECKOUT</ButtonComponent>
    </div>
  );
};

export default CartDropdown;
