import React from 'react';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { usePlanContext } from '../contexts/PlanContext';

const stripePromise = loadStripe('pk_test_51NaLdYDnlOKVUUtw2AyDUUKaPPsnrdtkr3lxSqn3GRhqrWtMEZPDSgPl9RMVdGNrTj2GJp7tS1ISPM4q7pQWo3Js006QEMxR7v');

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const { selectedPlan } = usePlanContext()

    const clientSecret = selectedPlan.key

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const result = await stripe.confirmCardPayment('{price_1NkineDnlOKVUUtwdrVpYONT}', {
            payment_method: {
                card: elements.getElement('card'),
            },
        });

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            // Payment completed successfully
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='checkout-card'>
                <label>
                    Card details
                </label>
                <CardElement options={{}} />
            </div>
            <button disabled={!stripe}>Submit</button>
        </form>
    );
};

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    );
};

export default Payment;
