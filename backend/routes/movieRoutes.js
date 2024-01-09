const express = require('express');
const movieController = require('../controllers/movieController');
const router = express.Router();


router.route('/').get(movieController.getAllMovie).post(movieController.createMovie);
router.route('/:id').get(movieController.getMovieById).put(movieController.updateMovie).delete(movieController.deleteMovie);

module.exports = router;