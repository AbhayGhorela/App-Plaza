const express = require('express');
const axios = require('axios');
const cors = require('cors');
// const postmark = require('postmark');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Import getRandomAppData function from scraper.js
const { getRandomAppData } = require('./scraper');

app.get('/api/getRandomAppData', async (req, res) => {
  try {
    const appData = await getRandomAppData();
    if (appData) {
      res.json(appData);
    } else {
      res.status(500).json({ error: 'Failed to scrape data' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
