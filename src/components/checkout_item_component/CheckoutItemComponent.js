import React from 'react';
import { connect } from 'react-redux';

import { deleteEntireItem, addItem, decrementItem } from '../../redux/cart/cart_action';

import './checkout_item_component.styles.scss';

const CheckoutItemComponent = ({ cartItem, deleteEntireItem, addItem, decrementItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`item-${name}`} />
      </div>
      <span>{name}</span>
      <span>${price} </span>
      <span className="quantity">
        <div className="value-button" onClick={() => decrementItem(cartItem)}>
          -
        </div>
        <input type="number" id="number" value={quantity} />
        <div className="value-button" onClick={() => addItem(cartItem)}>
          +
        </div>
      </span>
      <div className="delete-button" onClick={() => deleteEntireItem(cartItem)}>
        <i className="fa fa-trash" />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEntireItem: cartItem => dispatch(deleteEntireItem(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    decrementItem: cartItem => dispatch(decrementItem(cartItem)),
  };
};
export default connect(null, mapDispatchToProps)(CheckoutItemComponent);
