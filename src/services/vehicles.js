const express = require('express');
const router = express.Router();
const db = require('../db'); // MySQL connection instance

router.get('/', (req, res) => {
  db.query('SELECT * FROM vehicles', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

module.exports = router;
