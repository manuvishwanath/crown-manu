import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;// as the stripe expects payment in cents($)
    const publishKey = 'pk_test_V0kxYAQMzp49qIYxPYt5qZqS00B3MQf505';

    const ontoken = (token) => {
        console.log(token);
        alert("Payment Sucessfull")
    }


    return (
        <StripeCheckout
            label="Pay Now"
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={ontoken}
            stripeKey={publishKey}
        />
    );
}

export default StripeButton;
