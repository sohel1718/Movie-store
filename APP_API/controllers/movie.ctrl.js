const Movie = require('../../APP_SERVER/model/movie.model');
 
const addMovie = function (req, res){
  const movie = new Movie(req.body);
  
  movie.save((err, movieData) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(movieData);
    } 
  })
};

const getMovie = function (req, res){
  Movie.find().exec(function(err, movieData) {
   if(err) {
     res.status(404).json(err);
     return;
   }
   res.status(200).json(movieData);
})
};

const getMovieById = function (req, res){
 const movieID = req.params.id;
 if (movieID) {
  Movie.findById(movieID).exec((err, movieData) => {
     if (err) {
       res.status(404).json(err);
     } else {
       res.status(200).json(movieData)
     }
   })
 } else {
   res.status(404).json({message: 'id not found ha'})
 }
};

const updateMovie = function (req, res){
 const movieID = req.params.id;
 if (movieID) {
  Movie.findById(movieID).exec((err, movieData) => {
     if (err) {
       res.status(404).json(err);
       return;
     } else if (movieData) {
       res.status(404).json({'message': 'food id no found'})
       return;
     }
     movieData = req.body;
     movieData.save((err, movieData) => {
       if (err) {
         res.status(404).json(err);
         return;
       } else {
         res.status(200).json(movieData);
       } 
     })
   })
 } else {
   res.status(404).json({message: 'id not found'})
 }
};

const deleteMovie = function (req, res){
 const movieID = req.params.id;
 if (movieID) {
  Movie.findByIdAndRemove(movieID).exec((err, movieData) => {
     if (err) {
       res.status(404).json(err);
       return;
     }
     res.status(204).json(null)
   })
 } else {
   res.status(404).json({message: 'id not found'})
 }
};

module.exports = {
  getMovie,
 addMovie,
 getMovieById,
 updateMovie,
 deleteMovie
};