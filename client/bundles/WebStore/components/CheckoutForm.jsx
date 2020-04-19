import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { BillingInfo } from "./BillingInfo.jsx";

const StripeCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <BillingInfo />
      <hr className='mb-4' />
      <h4 className='mb-3'>Payment</h4>
      <div className='mb-12'>
        <label htmlFor='card-element'>Credit or Debit Card</label>
        <div
          id='card-element'
          className='form-control'
          style={{ height: "2.4em", paddingTop: ".7em", marginBottom: "1em" }}
        >
          <CardElement />
        </div>
      </div>

      <button className='btn btn-primary btn-lg btn-block' type='submit'>
        Confirm and Pay
      </button>
    </form>
  );
};

export const CheckoutForm = () => {
  const stripePromise = loadStripe(
    "pk_test_ojXwVSPXF1Th7j1Q4d90rXyy00zGS8Y2W0"
  );

  return (
    <Elements stripe={stripePromise}>
      <StripeCheckoutForm />
    </Elements>
  );
};
