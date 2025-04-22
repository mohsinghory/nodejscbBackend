const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');
// API endpoint to get FAQCounseling
  // section 8
  
  router.get("/api/faqs", (req, res) => {
    const sql = "SELECT * FROM faqs";
    connection.query(sql, (err, results) => {
      if (err) {
        console.error("Failed to fetch FAQs:", err);
        res.status(500).json({ error: "Failed to fetch FAQs" });
        return;
      }
      res.json(results);
    });
  });

  module.exports = router;