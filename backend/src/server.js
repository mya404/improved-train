const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Example route: GET /api/inspiration
app.get('/api/inspiration', (req, res) => {
  // Stub: In real app, fetch from AI or external API
  res.json({
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    image: "https://source.unsplash.com/random/600x400/?inspiration,sky,nature"
  });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
