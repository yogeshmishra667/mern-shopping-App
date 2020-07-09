const express = require('express');
const path = require('path');
const data = require('../data/data');
require('./db/database');

//init express🍏
const app = express();

// parse application/x-www-form-urlencoded and application/json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/users', require('../routes/userRoute'));
app.use('/api/products', require('../routes/productRouter'));

//for run express server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`express server run on port ${port} 🔥`);
});
