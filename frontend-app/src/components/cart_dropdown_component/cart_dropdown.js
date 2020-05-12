import React from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ButtonComponent from '../button_component/ButtonComponent';
import CartItem from '../cart_item_component/cart_item';

import './cart_dropdown.styles.scss';

const CartDropdown = (props) => {
  const { cartItems, toggleCartHidden } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((singleCartItem) => {
            return <CartItem key={singleCartItem.id} singleCartItem={singleCartItem} />;
          })
        ) : (
          <span className="cart-empty">Cart Empty</span>
        )}
      </div>
      <ButtonComponent
        onClick={() => {
          props.history.push('/checkout');
          toggleCartHidden();
        }}>
        CHECKOUT
      </ButtonComponent>
    </div>
  );
};

// const mapStateToProps = state => {
//   const { cartItems } = state.cart;
//   return { cartItems };
// };

export default withRouter(CartDropdown);
