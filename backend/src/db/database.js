const mongoose = require('mongoose');

const url = process.env.MONGODB_URL;
mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((db) => console.log('DB is connected 🔥'))
  .catch((err) => console.error(err));
