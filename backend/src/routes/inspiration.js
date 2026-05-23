const express = require('express');
const router = express.Router();

// GET /api/inspiration
router.get('/', (req, res) => {
  try {
    // TODO: Replace mock with real AI or API
    res.json({
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
      image: "https://source.unsplash.com/random/600x400/?inspiration,sky,nature"
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get inspiration.' });
  }
});

module.exports = router;
