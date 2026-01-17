// backend/stripe.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Mapowanie pakietów na priceId
const PRICE_IDS = {
  monster: 'price_1SpiIH639JRV7b5vohhmcOm9',
  premium: 'price_1SpiFp639JRV7b5vFrvUPG2P',
  silver: 'price_1SpiAa639JRV7b5v8XuLdpsi',
};

async function createCheckoutSession(req, res) {
  const { package } = req.body;
  const priceId = PRICE_IDS[package];

  if (!priceId) {
    return res.status(400).json({ error: 'Nieprawidłowy pakiet' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription', // subskrypcja
      success_url: 'https://twoja-strona.pl/success', // zmień na swój link sukcesu
      cancel_url: 'https://twoja-strona.pl/cancel',   // zmień na swój link anulowania
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Błąd Stripe:', error);
    res.status(500).json({ error: 'Błąd tworzenia sesji płatności' });
  }
}

module.exports = { createCheckoutSession };
