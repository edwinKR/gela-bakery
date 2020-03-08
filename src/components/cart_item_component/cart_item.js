import React from 'react';

import './cart_item.styles.scss';

const CartItem = ({ singleCartItem }) => {
  const { name, imageUrl, price, quantity } = singleCartItem;

  return (
    <div className="single-cart-item">
      <img src={imageUrl} alt={`item-${name}`} />
      <div className="item-detail">
        <span className="item-name">{name}</span>
        <span className="item-price">
          ${price} x {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
