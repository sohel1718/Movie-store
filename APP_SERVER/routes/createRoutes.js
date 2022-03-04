const express = require('express');
const createController = require('../controller/createController');

const router = express.Router();

router.get('/', createController.create_movie_page);
router.post('/', createController.create_movie);

module.exports = router;