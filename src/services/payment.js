const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL connection instance

router.post('/', (req, res) => {
  const { bookingId, amount, cardNumber, expiryDate, cvv } = req.body;

  // Example: validate card details (simplified for demo purposes)
  if (!cardNumber || !expiryDate || !cvv) {
    return res.status(400).json({ error: 'Invalid payment details' });
  }

  const query = `INSERT INTO payments (booking_id, amount, card_number, status) VALUES (?, ?, ?, ?)`;
  db.query(query, [bookingId, amount, cardNumber, 'Completed'], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Payment processing failed' });
    }
    res.json({ message: 'Payment successful', paymentId: result.insertId });
  });
});

module.exports = router;
