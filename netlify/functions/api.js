// netlify/functions/api.js

const express = require("express");
const serverless = require("serverless-http");
const mysql = require("mysql2/promise");
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
  ssl: {
    rejectUnauthorized: false
  }
};

// Helper function for database queries
const dbQuery = async (query, params = []) => {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.query(query, params);
    return results;
  } catch (err) {
    console.error("Database error:", err);
    throw err;
  } finally {
    await connection.end();
  }
};

// Helper function for handling errors
const handleErrors = (res, err, errorMessage) => {
  console.error(errorMessage, err);
  res.status(500).json({ error: errorMessage, details: err.message });
};

// GET endpoints for fetching data
app.get("/topics", async (req, res) => {
  try {
    const topics = await dbQuery("SELECT * FROM Topics");
    res.json(topics);
  } catch (err) {
    handleErrors(res, err, "Error fetching topics");
  }
});

app.get("/notes", async (req, res) => {
  try {
    const notes = await dbQuery("SELECT * FROM Notes");
    res.json(notes);
  } catch (err) {
    handleErrors(res, err, "Error fetching notes");
  }
});

app.get("/tags", async (req, res) => {
  try {
    const tags = await dbQuery("SELECT * FROM Tags");
    res.json(tags);
  } catch (err) {
    handleErrors(res, err, "Error fetching tags");
  }
});

app.get("/note-tags", async (req, res) => {
  try {
    const noteTags = await dbQuery("SELECT * FROM NoteTags");
    res.json(noteTags);
  } catch (err) {
    handleErrors(res, err, "Error fetching note tags");
  }
});

// DELETE endpoint for notes
app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  try {
    // First, delete related entries in NoteTags
    await dbQuery("DELETE FROM NoteTags WHERE NoteID = ?", [noteId]);
    
    // Then delete the note
    const result = await dbQuery("DELETE FROM Notes WHERE NoteID = ?", [noteId]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Note not found" });
    }
    
    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    handleErrors(res, err, "Error deleting note");
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "An unexpected error occurred", details: err.message });
});

// Export the serverless function
module.exports.handler = serverless(app);