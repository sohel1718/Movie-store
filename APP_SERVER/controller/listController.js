const request = require('request');

module.exports.movie_list = function(req, res) {
  const path = '/api/getMovies';
  const requestOptions = {
    url: 'http://localhost:3000' + path,
    method: 'GET',
    json: {}
  };
  request(requestOptions, (err, response, body) => {
    _renderHomePage(req, res, body)
  })
}

module.exports.movie_by_id = function(req, res) {
  const path =  `/api/getMovies/${req.params.id}`;
  const requestOptions = {
    url: 'http://localhost:3000' + path,
    method: 'GET',
    json: {}
  };
  request(requestOptions, (err, response, body) => {
    _renderInfoPage(req, res, body)
  })
}

const _renderHomePage = function (req, res, responseBody) {
    console.log(responseBody);
  res.render('movieList', {movies: responseBody})
}

const _renderInfoPage = function (req, res, responseBody) {
  res.render('movieDisplay', {movie: responseBody})
}