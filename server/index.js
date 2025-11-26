const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'NoteCode API is running' });
});

// TODO: Add snippet routes in Task 2.2

// Start server
app.listen(PORT, () => {
  console.log(`🚀 NoteCode API server running on http://localhost:${PORT}`);
});
