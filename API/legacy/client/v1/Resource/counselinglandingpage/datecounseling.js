
const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');



//API endpoint to get datescounseling
// section 5

router.get('/api/important-dates', (req, res) => {
  const query = 'SELECT * FROM important_dates';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching important dates:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});
module.exports = router;