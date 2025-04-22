
const express = require('express');
const router = express.Router();
const connection = require('../../../../../../db');


// API endpoint to get eligibilitycounseling 
  // section 4
  router.get("/api/eligibility", (req, res) => {
    connection.query("SELECT * FROM eligibility_criteria", (err, results) => {
      if (err) {
        console.error("Error fetching eligibility:", err);
        return res.status(500).json({ error: "Database error" });
      }
      res.json(results);
    });
  });
  module.exports = router;