const express = require('express');
const app = express();
const models = require('./database/models');
const cors = require('cors');

const reservations = require('./api/reservation_api');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', require('./api'));

app.use('/reservations', reservations)

app.listen(4000, () => {
  console.log("Listening on port 4000");
})