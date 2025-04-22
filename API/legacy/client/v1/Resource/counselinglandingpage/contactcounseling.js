
const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');



// API endpoint to get contactcounseling
  // section 7
  router.get('/api/contact', (req, res) => {
    const query = 'SELECT * FROM contact_info LIMIT 1';
  
    connection.query(query, (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Database query failed' });
      }
      res.json(results[0]);
    });
  });
  
  module.exports = router;