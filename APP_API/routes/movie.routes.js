var express = require('express');
var router = express.Router();

const movieCtrl = require('../controllers/movie.ctrl');

router.post('/addMovie', movieCtrl.addMovie);
router.get('/getMovies', movieCtrl.getMovie);
router.get('/getMovies/:id', movieCtrl.getMovieById);
router.put('/updateMovie/:id', movieCtrl.updateMovie);
router.delete('/deleteMovie/:id', movieCtrl.deleteMovie);

module.exports = router; 