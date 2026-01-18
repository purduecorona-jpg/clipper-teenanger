const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Status endpoint – zawsze działa
app.get('/api/status', (req, res) => {
  res.json({ status: "Clipper Teenager MVP działa poprawnie" });
});

// Stripe webhook endpoint (przykład)
app.post('/api/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  // tutaj Twój kod obsługi Stripe Live
  res.status(200).send('Webhook received');
});

// Wszystkie inne requesty → obsługa 404
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint nie istnieje' });
});

app.listen(PORT, () => {
  console.log(`Backend Clipper Teenager działa na porcie ${PORT}`);
});
