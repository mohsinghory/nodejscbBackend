const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');



// --- Process Steps ---
router.get('/api/process-steps', (req, res) => {
    const query ='SELECT * FROM process_steps';
  
    connection.query(query,(err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });
  
  // POST - Create
  router.post('/api/process-steps', (req, res) => {
    const { title, description, icon } = req.body;
    const query = 'INSERT INTO process_steps (title, description, icon) VALUES (?, ?, ?)';
  
    connection.query(query, [title, description, icon], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Process Step added successfully', id: result.insertId });
    });
  });
  
  // PUT - Update
  router.put('/api/process-steps/:id', (req, res) => {
    const { title, description, icon } = req.body;
    const { id } = req.params;
    const query = 'UPDATE process_steps SET title = ?, description = ?, icon = ? WHERE id = ?';
  
    connection.query(query, [title, description, icon, id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Process Step updated successfully' });
    });
  });
  
  // DELETE
  router.delete('/api/process-steps/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM process_steps WHERE id = ?';
  
    connection.query(query, [id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Process Step deleted successfully' });
    });
  });
  
  
  // --- Info Items ---
  router.get('/api/info-items', (req, res) => {
    const query= 'SELECT * FROM info_items';
      
      connection.query(query,(err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });
  // POST
  router.post('/api/info-items', (req, res) => {
    const { title, description, icon } = req.body;
    const query = 'INSERT INTO info_items (title, description, icon) VALUES (?, ?, ?)';
  
    connection.query(query, [title, description, icon], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Info Item added successfully', id: result.insertId });
    });
  });
  
  // PUT
  router.put('/api/info-items/:id', (req, res) => {
    const { title, description, icon } = req.body;
    const { id } = req.params;
    const query = 'UPDATE info_items SET title = ?, description = ?, icon = ? WHERE id = ?';
  
    connection.query(query, [title, description, icon, id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Info Item updated successfully' });
    });
  });
  
  // DELETE
  router.delete('/api/info-items/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM info_items WHERE id = ?';
  
    connection.query(query, [id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Info Item deleted successfully' });
    });
  });
  
  
  // --- Counseling Features ---
  router.get('/api/counseling-features', (req, res) => {
    const query='SELECT * FROM counseling_features';
  
    connection.query(query,(err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });
  // POST
  router.post('/api/counseling-features', (req, res) => {
    const { title, description, icon } = req.body;
    const query = 'INSERT INTO counseling_features (title, description, icon) VALUES (?, ?, ?)';
  
    connection.query(query, [title, description, icon], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Feature added successfully', id: result.insertId });
    });
  });
  
  // PUT
  router.put('/api/counseling-features/:id', (req, res) => {
    const { title, description, icon } = req.body;
    const { id } = req.params;
    const query = 'UPDATE counseling_features SET title = ?, description = ?, icon = ? WHERE id = ?';
  
    connection.query(query, [title, description, icon, id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Feature updated successfully' });
    });
  });
  
  // DELETE
  router.delete('/api/counseling-features/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM counseling_features WHERE id = ?';
  
    connection.query(query, [id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Feature deleted successfully' });
    });
  });

  module.exports=router;