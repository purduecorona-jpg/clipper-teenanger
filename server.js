const express = require('express');
const cors = require('cors');
const stripeRouter = require('./stripe');
const videoRouter = require('./video');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/create-checkout-session', stripeRouter);
app.use('/upload-video', videoRouter);

app.use(express.static('../frontend'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
