import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = props => {
  const publishableKey = 'pk_test_S88O6hmqZN2WBC7CZjG3366I00sADGe3LC';
  const imageLink = 'https://freesvg.org/img/bread-mateya-01.png';
  const { price } = props;

  const onToken = async token => {
    try {
      const response = await axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: price * 100,
          token,
        },
      });
      alert(`Payment Success! Enjoy!`);
    } catch (error) {
      console.log(error);
      alert(`Payment Error.`);
    }
  };

  console.log(price);
  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publishableKey}
      name="Gela's Bakery"
      image={imageLink}
      currency="USD"
      description={`Your total is $${price}`}
      billingAddress
      shippingAddress
      label="Get Your Goodies"
      panelLabel="Pay Now"
      amount={price * 100}
    />
  );
};

export default StripeCheckoutButton;
