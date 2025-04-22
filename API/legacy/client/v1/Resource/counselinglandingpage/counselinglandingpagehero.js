const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');


// Landing page API 
//section 1
router.get('/api/counseling-hero', (req, res) => {
    connection.query('SELECT * FROM counseling_data_collections', (err, results) => {
      if (err) 
        return res.status(500).json({ error: 'Fetch error' });
      res.json(results);
  });
  });
  
  
  // 2. Create New
  router.post('/api/counseling-hero', (req, res) => {
    const { name, title, description } = req.body;
    const sql = 'INSERT INTO counseling_data_collections (name, title, description) VALUES (?, ?, ?)';
    connection.query(sql, [name, title, description], (err, result) => {
      if (err) return res.status(500).json({ error: 'Insert error' });
      res.json({ message: 'Data added successfully', id: result.insertId });
    });
  });
  
  // 3. Update
  router.put('/api/counseling-hero/:id', (req, res) => {
    const { id } = req.params;
    const { name, title, description } = req.body;
    const sql = 'UPDATE counseling_data_collections SET name = ?, title = ?, description = ? WHERE id = ?';
    connection.query(sql, [name, title, description, id], (err, result) => {
      if (err) return res.status(500).json({ error: 'Update error' });
      res.json({ message: 'Data updated successfully' });
    });
  });
  
  // 4. Delete
  router.delete('/api/counseling-hero/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM counseling_data_collections WHERE id = ?', [id], (err, result) => {
      if (err) return res.status(500).json({ error: 'Delete error' });
      res.json({ message: 'Data deleted successfully' });
    });
  });
  

module.exports=router;