const express = require('express');
const movieController = require('../controller/listController');

const router = express.Router();

router.get('/', movieController.movie_list);
router.get('/:id', movieController.movie_by_id);

module.exports = router;