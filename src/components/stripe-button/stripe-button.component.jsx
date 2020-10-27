import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GvoSoAJujcbjWBpyDFXekJRSQKYSHZULfy5CZ4kfd3qbFH5FrSqy2S9XnLl4nNKQl6JtX077ykuWu0LVR4pSFqA00TNZwnCIe";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $S{price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
