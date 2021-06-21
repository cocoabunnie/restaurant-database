const express = require('express');
const app = express();
const models = require('./database/models');
const cors = require('cors');

const student = require('./api/student_api');
const campuses = require('./api/campus_api');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', require('./api'));

app.use('/students', student)
app.use('/campuses', campuses)

app.listen(4000, () => {
  console.log("Listening on port 4000");
})