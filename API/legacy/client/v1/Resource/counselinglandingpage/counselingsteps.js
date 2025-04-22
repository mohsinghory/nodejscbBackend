const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');
// API endpoint to get processcounseling 
  // section 4
  
  router.get('/api/counselling-process', (req, res) => {
    connection.query('SELECT * FROM counselling_steps ORDER BY id', (err, results) => {
      if (err) {
        console.error('Error fetching data:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({
          title: 'WBJEE Counselling Process',
          steps: results.map(step => ({
            id: step.id,
            title: step.title,
            description: step.description
          }))
        });
      }
    });
  });
  module.exports = router;