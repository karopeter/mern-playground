const Joi = require('joi');
const mongoose = require('mongoose');

 
const movieSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  title: {
    type: String,
    required: true,
    minlength: 5, 
    maxlength: 50
  },
  genre: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  booking: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  status: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isMovie: {
    type: Boolean
  },
   createdAt: {
     type: Date,
     required: false,
     default: Date.now,
   },
});

const Movie = mongoose.model('Movie', movieSchema);


function validateMovie(movie) {
    const schema = {
      fullName: Joi.string().min(5).required(),
      title: Joi.string().min(5).required(),
      genre: Joi.string().min(5).required(),
       booking: Joi.string().min(5).required(),
       status: Joi.string().min(5).required(),
      isMovie: Joi.boolean(),
      createdAt: Joi.date()
    };

    return Joi.validate(movie, schema);
}

exports.movieSchema  = movieSchema;
exports.Movie = Movie;
exports.validate = validateMovie;
