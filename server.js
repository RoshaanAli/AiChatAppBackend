const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'Invalid input. Please provide a message string.'
      });
    }

    // Simulate some processing time
    setTimeout(() => {
      res.json({
        response: message,
        timestamp: new Date().toISOString()
      });
    }, 500);

  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

app.get('/', (req, res) => {
  res.json({
    message: 'AI Chat Backend API'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
