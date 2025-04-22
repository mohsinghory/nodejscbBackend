const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');
// API endpoint to get keypointscounseling 
// section 3
router.get('/api/keypoints', (req, res) => {
    const sql = `
      SELECT kh.name, GROUP_CONCAT(k.point) as points
      FROM keypoints_header kh
      JOIN keypoints k ON kh.id = k.header_id
      GROUP BY kh.id
      LIMIT 1
    `;
  
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (results.length > 0) {
        const { name, points } = results[0];
        res.json({
          name,
          keyPoints: points.split(',')
        });
      } else {
        res.json({ name: '', keyPoints: [] });
      }
    });
  });
  module.exports= router;