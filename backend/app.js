const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const walmartRoutes = require('./routes/walmartRoutes');
const movieRoutes = require('./routes/movieRoutes');
const cors = require('cors');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/tutor-class")
.then(() => console.log('Connected to MongoDB....'))
.catch((err) => console.log('Could not connect to the database'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/walmart", walmartRoutes);
app.use("/api/v1/movies", movieRoutes);                                             

app.use((req, res) => {
    res.send('Hello World');
});

module.exports = app;
