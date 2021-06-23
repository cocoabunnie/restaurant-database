const express = require('express');
const router = express.Router();

router.use('/reservations', require('./reservation_api'));

module.exports = router;