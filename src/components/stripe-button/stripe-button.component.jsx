import React from "react";

import StripeCheckoutButton from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GvoSoAJujcbjWBpyDFXekJRSQKYSHZULfy5CZ4kfd3qbFH5FrSqy2S9XnLl4nNKQl6JtX077ykuWu0LVR4pSFqA00TNZwnCIe";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };

  return (
    <StripeCheckoutButton
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price} `}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
