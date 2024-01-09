const { Movie, validate } = require('../models/movieModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllMovie = catchAsync(async (req, res) => {
  const movies = await Movie.find().sort("title");
  res.send(movies);
});

exports.createMovie = catchAsync(async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let movie = new Movie({
    fullName: req.body.fullName,
    title: req.body.title,
    genre: req.body.genre,
    booking: req.body.booking,
    status: req.body.status,
    isMovie: req.body.isMovie,
  });
  movie = await movie.save();

  res.send(movie);
});

exports.getMovieById = catchAsync(async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie)
    return res.status(404).send("The Movie with the given ID was not found");

  res.send(movie);
});

exports.updateMovie = catchAsync(async (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      fullName: req.body.fullName,
      title: req.body.title,
      isMovie: req.body.isMovie,
    },
    {
      new: true,
    }
  );
  if (!movie)
    return res.status(404).send("The movie with the given ID was not found");

  res.send(movie);
});

exports.deleteMovie = catchAsync(async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});