import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = props => {
  const onToken = token => {
    alert(`Payment Success! Enjoy!`);
  };

  const publishableKey = 'pk_test_S88O6hmqZN2WBC7CZjG3366I00sADGe3LC';
  const imageLink = 'https://freesvg.org/img/bread-mateya-01.png';
  const { price } = props;

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publishableKey}
      name="Gela's Bakery"
      image={imageLink}
      currency="USD"
      description={`Your total is ${price}`}
      billingAddress
      shippingAddress
      label="Get Your Goodies"
      panelLabel="Pay Now"
      amount={price}
    />
  );
};

export default StripeCheckoutButton;
