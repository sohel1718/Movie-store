const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieRatings = new Schema({
  averageRating: {
    type: Number,
    min: 1,
    max: 5,
  },
  imdbRating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

const movie = new Schema({
  name: {
    type: String,
    required: true,
    max: 20
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    min: 100,
    max: 300
  },  
  ratings: movieRatings
})

module.exports = mongoose.model('movies', movie);