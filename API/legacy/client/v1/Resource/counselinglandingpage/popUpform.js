const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');

// CREATE
router.post('/', (req, res) => {
  const { name, mobile, email, state, district, jee_rank, interest } = req.body;
  const sql = `
    INSERT INTO counseling_forms (name, mobile, email, state, district, jee_rank, interest)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
  connection.query(sql, [name, mobile, email, state, district, jee_rank, interest], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, message: 'Form submitted successfully' });
  });
});

// READ ALL
router.get('/', (req, res) => {
  connection.query('SELECT * FROM counseling_forms', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// READ ONE
router.get('/:id', (req, res) => {
  connection.query('SELECT * FROM counseling_forms WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Form not found' });
    res.json(results[0]);
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  connection.query('DELETE FROM counseling_forms WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Form deleted successfully' });
  });
});




module.exports = router;
