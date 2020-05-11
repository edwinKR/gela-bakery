import React from 'react';
import { connect } from 'react-redux';

// import { toggleCartHidden } from '../../redux/cart/cart_action';

import './cart_icon.styles.scss';

const cartImage = '/cart.png';

const CartIcon = (props) => {
  console.log(props);
  const { toggleCartHidden, totalCartItems } = props;
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img src={cartImage} alt="cart-icon" className="cart-image" />
      <div className="item-counter-badge">{totalCartItems}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state.cart;
  const totalCartItems = cartItems.reduce((currentTotal, cartItem) => {
    return currentTotal + cartItem.quantity;
  }, 0);

  return {
    totalCartItems,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     toggleCartHidden: () => dispatch(toggleCartHidden()),
//   };
// };

export default connect(mapStateToProps)(CartIcon);
