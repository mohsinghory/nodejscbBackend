const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',    // Your database host
  user: 'root',         // Your database user
  password: 'mohsin8791344154', // Your database password
  database: 'careerbanao' // Your database name
});

module.exports = connection;
