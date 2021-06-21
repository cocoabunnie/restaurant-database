const express = require('express');
const router = express.Router();

router.use('/restaurants', require('./restaurant_api'));

module.exports = router;