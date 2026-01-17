const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'Clipper Teenager MVP działa poprawnie' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server uruchomiony na porcie ${PORT}`);
});
