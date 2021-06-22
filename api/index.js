const express = require('express');
const router = express.Router();

router.use('/reservations', require('./restaurant_api'));

module.exports = router;