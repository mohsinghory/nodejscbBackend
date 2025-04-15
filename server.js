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
const PORT = 3000;
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
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
// Landing page API section 1
app.get('/api/hero/:counselingId', (req, res) => {
  const counselingId = req.params.counselingId;
  const sql = 'SELECT * FROM hero_sections WHERE counseling_id = ?';

  connection.query(sql, [counselingId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: 'Hero Section not found' });
    }
    res.json(result[0]);
  });
});

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
// Landing page API 
// section 2
app.get('/api/counseling', (req, res) => {
  const sql = 'SELECT * FROM counseling_info LIMIT 1';
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching counseling info:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.length > 0) {
      const data = result[0];
      res.json({
        title: data.title,
        description: data.description.split('\n'), // Split into array of paragraphs
        officialWebsite: data.official_website,
        enrollLink: data.enroll_link,
      });
    } else {
      res.status(404).json({ error: 'No counseling info found' });
    }
  });
});

//-----------------------------------------------------------------------------------------------------------------------

// API endpoint to get keypointscounseling 
// section 3
app.get('/api/keypoints', (req, res) => {
  const sql = `
    SELECT kh.name, GROUP_CONCAT(k.point) as points
    FROM keypoints_header kh
    JOIN keypoints k ON kh.id = k.header_id
    GROUP BY kh.id
    LIMIT 1
  `;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length > 0) {
      const { name, points } = results[0];
      res.json({
        name,
        keyPoints: points.split(',')
      });
    } else {
      res.json({ name: '', keyPoints: [] });
    }
  });
});

//------------------------------------------------------------------------------------------------------------------------------
// API endpoint to get processcounseling 
// section 4

app.get('/api/counselling-process', (req, res) => {
  connection.query('SELECT * FROM counselling_steps ORDER BY id', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({
        title: 'WBJEE Counselling Process',
        steps: results.map(step => ({
          id: step.id,
          title: step.title,
          description: step.description
        }))
      });
    }
  });
});

//------------------------------------------------------------------------------------------------------------------------------
// API endpoint to get eligibilitycounseling 
// section 4
app.get("/api/eligibility", (req, res) => {
  connection.query("SELECT * FROM eligibility_criteria", (err, results) => {
    if (err) {
      console.error("Error fetching eligibility:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});


//------------------------------------------------------------------------------------------------------------------------------
// API endpoint to get datescounseling
// section 5

app.get('/api/important-dates', (req, res) => {
  const query = 'SELECT * FROM important_dates';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching important dates:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});
//------------------------------------------------------------------------------------------------------------------------------
// API endpoint to get Documentcouseling
// section 6
app.get("/api/required-documents", (req, res) => {
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


//------------------------------------------------------------------------------------------------------------------------------
// API endpoint to get contactcounseling
// section 7
app.get('/api/contact', (req, res) => {
  const query = 'SELECT * FROM contact_info LIMIT 1';

  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results[0]);
  });
});

//------------------------------------------------------------------------------------------------------------------------------
// API endpoint to get FAQCounseling
// section 8

app.get("/api/faqs", (req, res) => {
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
//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

//SIDE BAR API OF LANDING PAGE
//Sec1Counseling

app.get("/api/counselings", (req, res) => {
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

app.get('/api/universities', (req, res) => {
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
app.post('/api/contact', (req, res) => {
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
app.get('/api/contacts', (req, res) => {
  connection.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, results) => {
    if (err) {
      console.error('Error fetching contacts:', err);
      return res.status(500).json({ error: 'Database error.' });
    }
    res.status(200).json(results);
  });
});



// Add a new video
app.post('/api/videos', (req, res) => {
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
app.get('/api/videos', (req, res) => {
  connection.query('SELECT * FROM videos ORDER BY created_at DESC', (err, results) => {
    if (err) {
      console.error('Error fetching videos:', err);
      return res.status(500).json({ error: 'Database error.' });
    }
    res.status(200).json(results);
  });
});





// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
