const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');


//SIDE BAR API OF LANDING PAGE
//Sec1Counseling

router.get("/api/counselings", (req, res) => {
    const query = "SELECT * FROM counselings";
    connection.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: "Failed to fetch data" });
      } else {
        res.json(results);
      }
    });
  });
  
  
  //SIDE BAR API OF LANDING PAGE
  //Sec2Counseling
  
  router.get('/api/universities', (req, res) => {
    const sql = 'SELECT * FROM universities';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching universities:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
  });
  
  
  //SIDE BAR API OF LANDING PAGE
  //Sec3Counseling
  
  // API endpoint to submit a contact form
  router.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill all fields.' });
    }
  
    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  
    connection.query(query, [name, email, message], (err, result) => {
      if (err) {
        console.error('Error inserting contact:', err);
        return res.status(500).json({ error: 'Database error.' });
      }
      res.status(200).json({ message: 'Contact submitted successfully!' });
    });
  });
  
  // API endpoint to get all contact messages (for admin)
  router.get('/api/contacts', (req, res) => {
    connection.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, results) => {
      if (err) {
        console.error('Error fetching contacts:', err);
        return res.status(500).json({ error: 'Database error.' });
      }
      res.status(200).json(results);
    });
  });
  
  
  
  // Add a new video
  router.post('/api/videos', (req, res) => {
    const { url } = req.body;
  
    if (!url) {
      return res.status(400).json({ error: 'Video URL is required.' });
    }
  
    const query = 'INSERT INTO videos (url) VALUES (?)';
  
    connection.query(query, [url], (err, result) => {
      if (err) {
        console.error('Error inserting video:', err);
        return res.status(500).json({ error: 'Database error.' });
      }
      res.status(200).json({ message: 'Video added successfully.' });
    });
  });
  
  // Get all videos
  router.get('/api/videos', (req, res) => {
    connection.query('SELECT * FROM videos ORDER BY created_at DESC', (err, results) => {
      if (err) {
        console.error('Error fetching videos:', err);
        return res.status(500).json({ error: 'Database error.' });
      }
      res.status(200).json(results);
    });
  });
  
  module.exports = router;