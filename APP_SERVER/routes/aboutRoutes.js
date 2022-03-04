const express = require('express');
const aboutController = require('../controller/aboutController');

const router = express.Router();

router.get('/', aboutController.about_page);

module.exports = router;