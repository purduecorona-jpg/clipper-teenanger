const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Status endpoint – zawsze działa
app.get('/api/status', (req, res) => {
  res.json({ status: "Clipper Teenager MVP działa poprawnie" });
});

// Możesz tu dodać swoje inne endpointy, np. Stripe webhook
// app.post('/api/webhook', express.raw({ type: 'application/json' }), (req, res) => { ... });

app.listen(PORT, () => {
  console.log(`Backend Clipper Teenager działa na porcie ${PORT}`);
});

