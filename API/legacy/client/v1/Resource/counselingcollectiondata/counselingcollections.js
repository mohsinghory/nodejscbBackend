const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');


//collection data
router.get('/api/counseling_collections', (req, res) => {
    const sql = 'SELECT * FROM counseling_pages'; // your table name
    connection.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });
  // ✅ POST API to Save Counseling Data
  let counselingData = [];
  
  // API Endpoint to handle POST requests
  // app.post('/api/counseling_collections', (req, res) => {
  //   const data = req.body;
  //   console.log("Received Data:", JSON.stringify(data, null, 2));
  
    
  //   // Here, you would save the data to a database (MongoDB, MySQL, etc.)
  //   // For now, we're just adding it to the mock database
  //   counselingData.push(data);
    
  //   res.status(200).json({ message: 'Data saved successfully' });
  // });
  
  router.post('/api/counseling_collections', (req, res) => {
    const { title, slug, sections } = req.body;
  
    const sql = 'INSERT INTO counseling_pages (title, slug, sections) VALUES (?, ?, ?)';
  
    connection.query(sql, [title, slug, JSON.stringify(sections)], (err, result) => {
      if (err) return res.status(500).json({ error: err });
  
      res.json({ message: 'Data inserted successfully', insertId: result.insertId });
    });
  });
  // DELETE counseling page by ID
  // DELETE counseling data by slug
  router.delete('/api/counseling_collections/:slug', (req, res) => {
    const slug = req.params.slug;
    const sql = 'DELETE FROM counseling_pages WHERE slug = ?';
    connection.query(sql, [slug], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Deleted successfully' });
    });
  });
  
  // UPDATE counseling data by slug
  router.put('/api/counseling_collections/:slug', (req, res) => {
    const slug = req.params.slug;
    const { title } = req.body;
    const sql = 'UPDATE counseling_pages SET title = ? WHERE slug = ?';
    connection.query(sql, [title, slug], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Updated successfully' });
    });
  });
  module.exports=router;