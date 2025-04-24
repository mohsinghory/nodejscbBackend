const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');


//SIDE BAR API OF LANDING PAGE
//Sec1Counseling

// GET all counselings
router.get("/sidebar/counselings", (req, res) => {
  const query = "SELECT * FROM counselings";
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to fetch data" });
    } else {
      res.json(results);
    }
  });
});

// GET single counseling by id
router.get("/sidebar/counselings/:id", (req, res) => {
  const query = "SELECT * FROM counselings WHERE id = ?";
  connection.query(query, [req.params.id], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to fetch data" });
    } else if (results.length === 0) {
      res.status(404).json({ message: "Counseling not found" });
    } else {
      res.json(results[0]);
    }
  });
});

// CREATE new counseling
router.post("/api/counselings", (req, res) => {
  const { name } = req.body;
  const query = "INSERT INTO counselings (name) VALUES (?)";
  connection.query(query, [name], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Failed to insert data" });
    } else {
      res.status(201).json({ id: result.insertId, message: "Counseling created" });
    }
  });
});

// UPDATE counseling
router.put("/sidebar/counselings/:id", (req, res) => {
  const { name } = req.body;
  const query = "UPDATE counselings SET name = ? WHERE id = ?";
  connection.query(query, [name, req.params.id], (err) => {
    if (err) {
      res.status(500).json({ error: "Failed to update data" });
    } else {
      res.json({ message: "Counseling updated" });
    }
  });
});

// DELETE counseling
router.delete("/sidebar/counselings/:id", (req, res) => {
  const query = "DELETE FROM counselings WHERE id = ?";
  connection.query(query, [req.params.id], (err) => {
    if (err) {
      res.status(500).json({ error: "Failed to delete data" });
    } else {
      res.json({ message: "Counseling deleted" });
    }
  });
});
  




  //---------------------------------------------------------------------------------------------------------------------------------
  
  //SIDE BAR API OF LANDING PAGE
  //Sec2Counseling
  
  // 🔍 GET all universities
router.get('/sidebar/universities', (req, res) => {
  const sql = 'SELECT * FROM universities';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching universities:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// 🔍 GET a single university by ID
router.get('/sidebar/universities/:id', (req, res) => {
  const sql = 'SELECT * FROM universities WHERE id = ?';
  connection.query(sql, [req.params.id], (err, results) => {
    if (err) {
      console.error('Error fetching university:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'University not found' });
    }
    res.json(results[0]);
  });
});

// 🆕 POST - Create a new university
router.post('/sidebar/universities', (req, res) => {
  const { name, location, imgSrc, route } = req.body;
  const sql = 'INSERT INTO universities (name, location, imgSrc, route) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, location, imgSrc, route], (err, result) => {
    if (err) {
      console.error('Error inserting university:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ id: result.insertId, message: 'University created successfully' });
  });
});

// ✏️ PUT - Update university
router.put('/sidebar/universities/:id', (req, res) => {
  const { name, location, imgSrc, route } = req.body;
  const sql = 'UPDATE universities SET name = ?, location = ?, imgSrc = ?, route = ? WHERE id = ?';
  connection.query(sql, [name, location, imgSrc, route, req.params.id], (err) => {
    if (err) {
      console.error('Error updating university:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'University updated successfully' });
  });
});

// ❌ DELETE - Remove university
router.delete('/sidebar/universities/:id', (req, res) => {
  const sql = 'DELETE FROM universities WHERE id = ?';
  connection.query(sql, [req.params.id], (err) => {
    if (err) {
      console.error('Error deleting university:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ message: 'University deleted successfully' });
  });
});
  
  
  //---------------------------------------------------------------------------------------------------------------------------
  
  
  
  
  
  //SIDE BAR API OF LANDING PAGE
  //Sec3Counseling
  
  // API endpoint to submit a contact form
  router.post('/sidebar/contact', (req, res) => {
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
  router.get('/sidebar/contacts', (req, res) => {
    connection.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, results) => {
      if (err) {
        console.error('Error fetching contacts:', err);
        return res.status(500).json({ error: 'Database error.' });
      }
      res.status(200).json(results);
    });
  });
  
  
  
  // Add a new video
  // ✅ CREATE - Add new video
router.post('/sidebar/videos', (req, res) => {
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
    res.status(201).json({ id: result.insertId, message: 'Video added successfully.' });
  });
});

// 🔍 READ - Get all videos
router.get('/sidebar/videos', (req, res) => {
  connection.query('SELECT * FROM videos ORDER BY created_at DESC', (err, results) => {
    if (err) {
      console.error('Error fetching videos:', err);
      return res.status(500).json({ error: 'Database error.' });
    }
    res.status(200).json(results);
  });
});

// 🔍 READ - Get video by ID
router.get('/sidebar/videos/:id', (req, res) => {
  const query = 'SELECT * FROM videos WHERE id = ?';
  connection.query(query, [req.params.id], (err, results) => {
    if (err) {
      console.error('Error fetching video:', err);
      return res.status(500).json({ error: 'Database error.' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Video not found.' });
    }
    res.status(200).json(results[0]);
  });
});

// ✏️ UPDATE - Update video URL
router.put('/sidebar/videos/:id', (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'Video URL is required.' });
  }

  const query = 'UPDATE videos SET url = ? WHERE id = ?';
  connection.query(query, [url, req.params.id], (err) => {
    if (err) {
      console.error('Error updating video:', err);
      return res.status(500).json({ error: 'Database error.' });
    }
    res.json({ message: 'Video updated successfully.' });
  });
});

// ❌ DELETE - Remove a video
router.delete('/sidebar/videos/:id', (req, res) => {
  const query = 'DELETE FROM videos WHERE id = ?';
  connection.query(query, [req.params.id], (err) => {
    if (err) {
      console.error('Error deleting video:', err);
      return res.status(500).json({ error: 'Database error.' });
    }
    res.json({ message: 'Video deleted successfully.' });
  });
});

  
  module.exports = router;