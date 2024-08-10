const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 10000, // 10 seconds
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

// Promisify for Node.js async/await.
const promisePool = pool.promise();

app.post("/api/notes", async (req, res) => {
  const { title, content, video } = req.body;
  console.log("Received request body:", req.body);

  if (!title || !content) {
    console.error("Missing title or content");
    return res.status(400).json({ error: "Title and content are required" });
  }

  const query =
    "INSERT INTO Notes (Title, Content, VideoLink) VALUES (?, ?, ?)";

  try {
    const [results] = await promisePool.query(query, [title, content, video]);
    console.log("Insertion successful:", results);
    res
      .status(201)
      .json({ message: "Note added successfully", id: results.insertId });
  } catch (err) {
    console.error("Database error:", err);
    res
      .status(500)
      .json({ error: "Error inserting data", details: err.message });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res
    .status(500)
    .json({ error: "An unexpected error occurred", details: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  pool.end((err) => {
    if (err) {
      console.error("Error closing MySQL connection pool", err);
    } else {
      console.log("MySQL connection pool closed");
    }
    process.exit(err ? 1 : 0);
  });
});
