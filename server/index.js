const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vimal2003@',
  database: 'contact_form'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// API endpoint to handle form submissions
app.post('/api/submit', (req, res) => {
  const { name, email, message } = req.body;

  const query = 'INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)';
  db.execute(query, [name, email, message], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send({ success: false, message: 'Error inserting data into database' });
    }
    res.status(200).send({ success: true, message: 'Form submitted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

