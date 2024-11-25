import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="success-icon">&#10004;</div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment. Your booking is confirmed!</p>
      <p>We have sent a confirmation email to your registered email address.</p>
      <button className="btn-home" onClick={() => (window.location.href = '/')}>
        Go to Homepage
      </button>
    </div>
  );
};

export default PaymentSuccess;
