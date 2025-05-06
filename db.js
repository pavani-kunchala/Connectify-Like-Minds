const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',     // Change if needed
  user: 'root',          // Your MySQL username
  password: '1234567890', // Your MySQL password
  database: 'ChatDB'     // The database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL Database');
  }
});

module.exports = db; 
 


{/*
  
CREATE DATABASE ChatDB;

USE ChatDB;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  room VARCHAR(50) NOT NULL,
);


*/}