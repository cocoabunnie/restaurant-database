const express = require('express');
const router = express.Router();

router.use('/campuses', require('./campus_api'));
router.use('/students', require('./student_api'));

module.exports = router;