const express = require('express');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(bodyParser.json());
app.use('/cart', cartRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Cart Service listening on port ${PORT}`);
});
