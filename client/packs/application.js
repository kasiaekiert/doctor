// Adapted from instructions on this page:
// https://stripe.com/docs/payments/accept-a-payment#web-create-payment-intent

import React from "react";
import ReactOnRails from "react-on-rails";

import {
  CardElement,
  Elements,
  ElementsConsumer
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

class CheckoutPage extends React.Component {
  render() {
    const stripePromise = loadStripe(this.props.publishableKey);

    return (
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ stripe, elements }) => (
            <CheckoutForm
              stripe={stripe}
              elements={elements}
              clientSecret={this.props.clientSecret}
            />
          )}
        </ElementsConsumer>
      </Elements>
    );
  }
}

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
};

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      success: null
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(this.props.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          /* TODO: The user's billing details should be here! */
          name: "John Doe"
        }
      }
    });

    if (result.error) {
      this.setState(state => {
        return { success: null, error: result.error };
      });
    } else {
      if (result.paymentIntent.status === "succeeded") {
        this.setState(state => {
          return { error: null, success: "Payment was successful!" };
        });
      } else {
        this.setState(state => {
          const message =
            "Payment was not an error but wasn't succesful either?";
          return { success: null, error: message };
        });
      }
    }
  };

  renderStatus() {
    const { success, error } = this.state;

    if (error) {
      return <div style={{ color: "red" }}>{JSON.stringify(error)}</div>;
    } else {
      return <div style={{ color: "green" }}>{success}</div>;
    }
  }

  render() {
    const disabled = !this.props.stripe;

    return (
      <form onSubmit={this.onSubmit}>
        {this.renderStatus()}
        <fieldset className='FormGroup'>
          <div className='FormRow'>
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button type='submit' className='SubmitButton' disabled={disabled}>
          Pay
        </button>
      </form>
    );
  }
}

ReactOnRails.register({ CheckoutPage });
