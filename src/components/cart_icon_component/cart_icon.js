import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart_action';

import './cart_icon.styles.scss';

const cartImage = '/cart.png';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img src={cartImage} alt="cart-icon" className="cart-image" />
      <div className="item-counter-badge">0</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
