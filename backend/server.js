// http://localhost:8080/phpmyadmin/
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
  host: "localhost", // Change if your database is on a different server
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "login_db", // Change to your database name
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed!", err);
  } else {
    console.log("Connected to Database!");
  }
});

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  
  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else if (results.length > 0) {
      res.json({ success: true, message: "Login Successful!" });
    } else {
      res.status(401).json({ error: "Invalid Credentials" });
    }
  });
});

// Start Server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
