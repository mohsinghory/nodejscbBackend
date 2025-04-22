 const express = require('express');
 const router = express.Router();
 const connection = require('../../../../../../db');
 
 
 // API endpoint to get Documentcouseling
  // section 6
  router.get("/api/required-documents", (req, res) => {
    const sql = "SELECT name, document_name FROM documents WHERE name = 'WBJEE'";
  
    connection.query(sql, (err, results) => {
      if (err) {
        console.error("Error fetching documents:", err);
        return res.status(500).json({ error: "Database error" });
      }
  
      const name = results.length > 0 ? results[0].name : "";
      const documents = results.map((row) => row.document_name);
  
      res.json({ name, documents });
    });
  });
  module.exports = router;