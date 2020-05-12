import React from 'react';
// import { connect } from 'react-redux';

import { default as CheckoutItemComponent } from '../../components/checkout_item_component/CheckoutItemComponent_Container';
import StripeCheckoutButton from '../../components/stripe_checkout_button/StripeCheckoutButton';

import './checkout_page.styles.scss';

const CheckoutPage = (props) => {
  console.log('-=---=-=-=-= ', props);
  const { cartItems, totalPrice } = props;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-column">
          <span>Item</span>
        </div>
        <div className="header-column">
          <span>Detail</span>
        </div>
        <div className="header-column">
          <span>Price</span>
        </div>
        <div className="header-column">
          <span>Quantity</span>
        </div>
        <div className="header-column">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItemComponent key={item.id} cartItem={item} />
      ))}
      <div className="checkout-total">Total: ${totalPrice}</div>

      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};

// const mapStateToProps = (props) => {
//   const {
//     cart: { cartItems },
//   } = props;
//   const totalPrice = cartItems.reduce((accumulatedPrice, cartItem) => {
//     return accumulatedPrice + cartItem.quantity * cartItem.price;
//   }, 0);

//   return {
//     cartItems,
//     totalPrice,
//   };
// };

export default CheckoutPage;
