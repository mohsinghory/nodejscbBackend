
const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');

// section 2
router.get('/api/about-counseling', (req, res) => {
    connection.query('SELECT * FROM counseling_info LIMIT 1', (err, results) => {
      if (err) 
        return res.status(500).json({ error: 'Fetch error' });
      res.json(results);
    });
  });

  module.exports = router;