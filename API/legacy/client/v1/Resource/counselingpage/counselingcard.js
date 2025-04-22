//API route for counselling home page

const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');

// API Route to get all counseling cards
router.get('/api/counseling-cards', (req, res) => {
    const query = 'SELECT * FROM counseling_cards';
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data: ', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      res.json(results); // Send all counseling cards as JSON
    });
  });
  
  // POST - Add new counseling card
  router.post('/api/counseling-cards', (req, res) => {
    const { title, description, icon } = req.body;
    const query = 'INSERT INTO counseling_cards (title, description, icon) VALUES (?, ?, ?)';
    connection.query(query, [title, description, icon], (err, result) => {
      if (err) {
        console.error('Error inserting data: ', err);
        return res.status(500).json({ error: 'Failed to add card' });
      }
      res.status(201).json({ id: result.insertId, title, description, icon });
    });
  });
  
  // PUT - Update existing counseling card
  router.put('/api/counseling-cards/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, icon } = req.body;
    const query = 'UPDATE counseling_cards SET title = ?, description = ?, icon = ? WHERE id = ?';
    connection.query(query, [title, description, icon, id], (err) => {
      if (err) {
        console.error('Error updating data: ', err);
        return res.status(500).json({ error: 'Failed to update card' });
      }
      res.json({ message: 'Card updated successfully' });
    });
  });
  
  // DELETE - Delete a counseling card
  router.delete('/api/counseling-cards/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM counseling_cards WHERE id = ?';
    connection.query(query, [id], (err) => {
      if (err) {
        console.error('Error deleting data: ', err);
        return res.status(500).json({ error: 'Failed to delete card' });
      }
      res.json({ message: 'Card deleted successfully' });
    });
  });


  module.exports=router;