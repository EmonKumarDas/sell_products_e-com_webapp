import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = ({payment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {price} = payment;
    const [error,setError] = useState('');
    const handleSubmit= async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }
    
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if(error){
            setError(error.message);
          }else{
            setError('');
          }

    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='my-5 bg-slate-500 text-black px-10 rounded font-bold py-2' disabled={!stripe}>
          Pay
        </button>
        <p className='font-bold text-red-700'>{error}</p>
      </form>
    );
};

export default CheckoutForm;