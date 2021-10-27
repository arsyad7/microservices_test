const express = require('express');
const app = express();
const port = 4001;
const cors = require('cors');
const router = require('./routes/UserRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})