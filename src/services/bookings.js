const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL connection instance

router.post('/', (req, res) => {
  const { vehicleId, startDate, endDate } = req.body;
  const query = `INSERT INTO bookings (vehicle_id, start_date, end_date) VALUES (?, ?, ?)`;

  db.query(query, [vehicleId, startDate, endDate], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'Booking successful!', bookingId: result.insertId });
  });
});

module.exports = router;
