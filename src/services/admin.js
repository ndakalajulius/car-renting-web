const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL connection instance

// Get all bookings
router.get('/bookings', (req, res) => {
  const query = `
    SELECT bookings.id, vehicles.name AS vehicleName, users.email AS customerName, 
           bookings.start_date AS startDate, bookings.end_date AS endDate, 
           bookings.status
    FROM bookings
    JOIN vehicles ON bookings.vehicle_id = vehicles.id
    JOIN users ON bookings.user_id = users.id`;
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch bookings' });
    }
    res.json(results);
  });
});

// Get all vehicles
router.get('/vehicles', (req, res) => {
  db.query('SELECT * FROM vehicles', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch vehicles' });
    }
    res.json(results);
  });
});

module.exports = router;
