import React from 'react';

import './checkout_item_component.styles.scss';

const CheckoutItemComponent = props => {
  console.log(props);
  const { name, imageUrl, price, quantity } = props.cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={`item-${name}`} />
      </div>
      <span>{name}</span>
      <span>${price}</span>
      <span>{quantity}</span>
      <div className="delete-button">
        <i className="fa fa-trash" />
      </div>
    </div>
  );
};

export default CheckoutItemComponent;
