const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.get('/api/proxy', async (req, res) => {
  try {
    const response = await fetch('https://diplomski-api.vercel.app/api/v1/oglasi/prikazoglasi');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});