const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');

//FORM API
router.post('/submit-form', (req, res) => {
    console.log(req.body); // <-- ADD THIS LINE
    const { name, email, phone, examType, rank, message } = req.body;
  
    const sql = 'INSERT INTO submissions (name, email, phone, exam_type, ranking, message) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [name, email, phone, examType, rank, message];
    
    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('An error occurred while submitting the form.');
      } else {
        res.send('Form submitted successfully!');
      }
  });
  });
  
  // GET all submissions
  router.get('/api/submit-form', (req, res) => {
    const sql = 'SELECT * FROM submissions';
    
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error retrieving contacts');
      } else {
        res.json(results); // send data to frontend
      }
    });
  });
  
  // DELETE a submission by ID
  router.delete('/api/submit-form/:id', (req, res) => {
    const contactId = req.params.id;
  
    const sql = 'DELETE FROM submissions WHERE id = ?';
  
    connection.query(sql, [contactId], (err, result) => {
      if (err) {
        console.error('Error deleting contact:', err);
        return res.status(500).send('An error occurred while deleting the contact.');
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).send('Contact not found.');
      }
  
      res.send('Contact deleted successfully.');
    });
  });


















module.exports=router;