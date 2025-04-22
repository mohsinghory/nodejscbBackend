//API route for counselling home page

const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');


router.get('/api/counseling-data', (req, res) => {
    const query = 'SELECT * FROM counseling_data'; // Assuming you want the first one
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data: ', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      res.json(results); // Send all counseling cards as JSON
    });
  });
  
  // Update counseling data by ID
  router.put('/api/counseling-data/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, button_text, image_src, image_title, image_subtitle } = req.body;
  
    const query = `
      UPDATE counseling_data 
      SET title = ?, description = ?, button_text = ?, image_src = ?, image_title = ?, image_subtitle = ?
      WHERE id = ?
    `;
  
    connection.query(
      query,
      [title, description, button_text, image_src, image_title, image_subtitle, id],
      (err, result) => {
        if (err) {
          console.error('Error updating data:', err);
          return res.status(500).json({ error: 'Failed to update data' });
        }
  
        res.json({ message: 'Data updated successfully'});
      }
    );
  });
  module.exports=router;