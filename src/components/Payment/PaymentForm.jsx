import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ bookingId, amount }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentData = {
      bookingId,
      amount,
      ...paymentDetails,
    };
    axios.post('/api/payments', paymentData)
      .then(response => alert('Payment Successful!'))
      .catch(error => console.error('Payment failed:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment</h2>
      <label>
        Card Number:
        <input
          type="text"
          value={paymentDetails.cardNumber}
          onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
        />
      </label>
      <label>
        Expiry Date:
        <input
          type="month"
          value={paymentDetails.expiryDate}
          onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
        />
      </label>
      <label>
        CVV:
        <input
          type="password"
          value={paymentDetails.cvv}
          onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
        />
      </label>
      <button type="submit">Pay ${amount}</button>
    </form>
  );
};

export default PaymentForm;
