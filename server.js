const express = require('express');
const connection = require('./db'); // Import your database connection
const path =require('path'); 
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true})); 
app.use(express.static(path.join(__dirname,"/public")));


app.use(cors());
const PORT = 3000; // You can choose any port
//---------------------------------------------------------------------------------------------------------------
//API route for counselling home page
app.get('/api/counseling-data', (req, res) => {
  const query = 'SELECT * FROM counseling_data'; // Assuming you want the first one
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data: ', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json(results); // Send all counseling cards as JSON
  });
});


//---------------------------------------------------------------------------------------------------------------

// API Route to get all counseling cards
app.get('/api/counseling-cards', (req, res) => {
  const query = 'SELECT * FROM counseling_cards';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data: ', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json(results); // Send all counseling cards as JSON
  });
});



//---------------------------------------------------------------------------------------------------------------
// --- Process Steps ---
app.get('/api/process-steps', (req, res) => {
  const query ='SELECT * FROM process_steps';

  connection.query(query,(err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// --- Info Items ---
app.get('/api/info-items', (req, res) => {
  const query= 'SELECT * FROM info_items';
    
    connection.query(query,(err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// --- Counseling Features ---
app.get('/api/counseling-features', (req, res) => {``
  const query='SELECT * FROM counseling_features';

  connection.query(query,(err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

//-----------------------------------------------------------------------------------------------------------------------


//FORM API
app.post('/submit-form', (req, res) => {
  console.log(req.body); // <-- ADD THIS LINE
  const { name, email, phone, examType, rank, message } = req.body;

  const sql = 'INSERT INTO submissions (name, email, phone, exam_type, ranking, message) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [name, email, phone, examType, rank, message];
  
  connection.query(sql,values,(err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('An error occurred while submitting the form.');
    } else {
      res.send('Form submitted successfully!');
    }
});
});














// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
