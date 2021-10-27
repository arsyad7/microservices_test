const express = require('express');
const app = express();
const port = 4002;
const cors = require('cors');
const router = require('./routes/ProductRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})