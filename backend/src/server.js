const express = require('express');
const cors = require('cors');
require('dotenv').config();

const inspirationRoute = require('./routes/inspiration');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/inspiration', inspirationRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
