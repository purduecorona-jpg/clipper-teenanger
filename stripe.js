const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/', async (req, res) => {
    const { priceId } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{ price: priceId, quantity: 1 }],
            mode: 'subscription',
            success_url: 'https://clipper-teenager.app/success',
            cancel_url: 'https://clipper-teenager.app/cancel',
        });
        res.json({ url: session.url });
    } catch (err) {
        console.error(err);
        res.status(500).send('Stripe error');
    }
});

module.exports = router;
