// Vercel serverless function for API routes
const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Multi-Department API is running!', timestamp: new Date().toISOString() });
});

// Authentication routes
app.post('/api/auth/signup', async (req, res) => {
  // Add your authentication logic here
  res.json({ message: 'Signup endpoint' });
});

app.post('/api/auth/signin', async (req, res) => {
  // Add your signin logic here
  res.json({ message: 'Signin endpoint' });
});

// Export for serverless
module.exports = serverless(app);
