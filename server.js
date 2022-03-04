const express = require('express');
const morgan = require('morgan');
require('./APP_SERVER/model/db')();
var path = require('path');

// const movieRoutes = require('./APP_SERVER/routes/movieRoutes');
// const aboutRoutes = require('./APP_SERVER/routes/aboutRoutes');
const apiRouter = require('./APP_API/routes/movie.routes');
// const createRoutes = require('./APP_SERVER/routes/createRoutes');

// express app
const app = express();

// register view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'APP_SERVER', 'views'));


// // middleware & static files
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'movie-public', 'build')))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// // routes
// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.use('/about', aboutRoutes);

// // blog routes
// app.use('/movies', movieRoutes);

// api router
app.use('/api', apiRouter);

// // api router
// app.use('/create', createRoutes);

// // 404 page
// app.use((req, res) => {
//   res.status(404).render('notFound', { title: '404' });
// });

app.listen(3000, function () {
  console.log('app is started');
})