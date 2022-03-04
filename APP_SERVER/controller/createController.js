const request = require('request');

module.exports.create_movie_page = function(req, res) {
  res.render('create');
}

module.exports.create_movie = function(req, res) {
  const path =  `/api/addMovie`;
  const requestOptions = {
    url: 'http://localhost:3000' + path,
    method: 'post',
    json: true,
    body: {
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
      ratings: {
        averageRating: req.body.averageRating,
        imdbRating: req.body.imdbRating
      }
    }
  };
  request(requestOptions, (err, response, body) => {
    if (response.statusCode === 404) {
      res.render('create', {message: response.body.message});
    } else {
      res.redirect('/movies');
    }
  })
}